const topPanel = {
  show: function (text, className) {
    let panel = `<div id="top-panel" class="top-panel ${className}">${text}</div>`;

    if (document.getElementById("top-panel") !== null) {
      document.getElementById("top-panel").remove();
    }
    //! додаєм змінну panel відразу після відкриваючого тегу боді
    document.body.insertAdjacentHTML("afterbegin", panel);
    this.hide();
  },
  hide: function () {
    setTimeout(function () {
      if (document.getElementById("top-panel") !== null) {
        document.getElementById("top-panel").remove();
      }
    }, 3000);
  },
  error: function (text) {
    this.show(text, "panel-error");
  },
  success: function (text) {
    this.show(text, "panel-success");
  },
  info: function (text) {
    this.show(text, "panel-info");
  },
};


const CART = [
  {
    name: "milk",
    qty: 2,
    isBuy: false,
    price: 15,
    total: 30
  },
  {
    name: "water",
    qty: 2,
    isBuy: true,
    price: 20,
    total: 40
  }
];

const DISCOUNT = [
  {
    promo: "qwe",
    type: "fixed",  //or persent
    value: 15,
    isUsed: false
  },
  {
    promo: "123",
    type: "percent",  //or persent
    value: 5,
    isUsed: false
  },
];

function addToCart(name, qty, price) {
  // !якщо карт.фінд === undefined , значить такого товару ще немає,
  // ! і додаем за допомогою push.
  //  порівнюємо el.name(ключ) і name який прийшов у аргументі ф-ції
  if (CART.find((el) => el.name === name) === undefined) {
    CART.push({
      name: name,
      qty: qty,
      isBuy: false,
      price: price,
      total: parseFloat((qty * price).toFixed(2)),
    });
    topPanel.success("Product successfully added");
  } else {
    const prodIndex = CART.findIndex((el) => el.name === name);
    const newQty = CART[prodIndex].qty + qty;
    CART[prodIndex].qty = newQty;
    CART[prodIndex].total = parseFloat(
      (newQty * CART[prodIndex].price).toFixed(2)
    );
    topPanel.success("Quantity successfully changed");
  }
  viewCartTable();
}
// addToCart("beer", 2, 50);
// console.log(CART);

// !ця функція буде брати значення з усіх інпутів та перевіряти їх(чи все вказано?)
function checkAndAddToCart() {
  let name = document.getElementById("product_name").value;
  let qty = parseInt(document.getElementById("product_qty").value);
  let price = parseFloat(document.getElementById("product_price").value);

  let valid = true;

  if (name === "") {
    topPanel.error("Enter product name");
    valid = false;
  }
  if (isNaN(qty)) {
    topPanel.error("Enter quantity valid value");
    valid = false;
  }
  if (qty <= 0) {
    topPanel.error("Quantity must be positive");
    valid = false;
  }
  if (isNaN(price)) {
    topPanel.error("Enter price valid value");
    valid = false;
  }
  if (price <= 0) {
    topPanel.error("Price must be positive");
    value = false;
  }
  if (valid) {
    addToCart(name, qty, price);
    document.getElementById("product_name").value = "";
    document.getElementById("product_qty").value = "1";
    document.getElementById("product_price").value = "";
  }
}

function viewCartTable() {
  let html = "";
  CART.sort((a, b) => Number(b.isBuy) - Number(a.isBuy));
  CART.forEach((el) => {
    html += `
            <tr>
                <td>${el.name}</td>
                <td>${
                  el.isBuy
                    ? '<span class="badge bg-success">Yes</span>'
                    : '<span class="badge bg-danger">No</span>'
                }
                </td>
                <td>
                <button class="btn btn-info btn-sm"
                onclick="changeProdQty('${el.name}', 'dec')">-</button>
                ${el.qty}
                <button class="btn btn-info btn-sm"
                onclick="changeProdQty('${el.name}', 'inc')">+</button>
                </td>
                <td>${el.price.toFixed(2)}</td>
                <td>${el.total.toFixed(2)}</td>
                <td>
                <button type="button" class="btn btn-primary" 
                onclick="changeProdStatus('${el.name}')">
                Change status
                </button>
                    <button type="button"
                        class="btn btn-danger"
                        onclick="askProductDelete('${el.name}')">&times;
                    </button>
                </td>
            </tr>
        `;
  });
  document.getElementById("cart-tbody").innerHTML = html;
  document.getElementById("cart-total").innerText = sumTotal().toFixed(2);
 
}
viewCartTable();

function sumTotal() {
  // let total = 0;
  // for (let i = 0; i < CART.length; i++) {
  //     total += CART[i].total;
  // }
  // return total;
  return CART.reduce((acc, curr) => {
    return acc + curr.total;
  }, 0);
}

function askProductDelete(name) {
  if (confirm(`Delete ${name} ?`)) {
    const index = CART.findIndex((el) => el.name === name);
    CART.splice(index, 1);
    viewCartTable();
    topPanel.info("Product successfully deleted");
  }
}

function changeProdStatus(name) {
  const index = CART.findIndex((el) => el.name === name);
  // if (CART[index].isBuy) {
  //   CART[index].isBuy = false;
  // } else {
  //   CART[index].isBuy = true;
  // }
  // !!!!!!
  CART[index].isBuy = !CART[index].isBuy;
  viewCartTable();
  topPanel.info("Status changed")
}

function changeProdQty(name, action) {
  let newQty = 0;
  const index = CART.findIndex(el => el.name === name);
  if (action === "inc") {
    newQty = CART[index].qty + 1;
  } else {
    if (CART[index].qty >= 2) {
      newQty = CART[index].qty - 1;
    } else {
      askProductDelete(name);
      return false;
    }
  }
  CART[index].qty = newQty;
  CART[index].total = CART[index].price * newQty;
  viewCartTable();
}

function checkAndApplyDiscount() {
  const discPromo = document.getElementById("discountField").value;
  const index = DISCOUNT.findIndex(el => el.promo === discPromo);
  // const disc = DISCOUNT.find(el => el.promo === discPromo);
  const disc = DISCOUNT[index];
  if (discPromo === "") {
    topPanel.error("Enter Promo code");
    return false;
  }
  if (index === -1) {
    topPanel.error("Promo code not found");
    return false;
  }
  if (disc.isUsed) {
    topPanel.error("This promo is used");
    return false;
  }
  DISCOUNT[index].isUsed = true;
  let newTotal = calcDiscount(disc);
  document.getElementById("discountValue").innerText = disc.value + 
    ((disc.type === "fxed") ? "uah" : "%");
  document.getElementById("totalWithDisc").innerText = (newTotal).toFixed(2);
  document.getElementById("discountField").value = "";
}

function calcDiscount(disc) {
  const { type, value } = disc;
  const sumTotalValue = sumTotal();
  switch (type) {
    case "fixed":
      return sumTotalValue - value;
    case "percent":
      return sumTotalValue - (sumTotalValue / 100 * value);
  }
}


