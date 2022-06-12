// !JS
// const xhr = new XMLHttpRequest();

// //  link from the root
// xhr.overrideMimeType("applicaation/json")
// xhr.open("get", "/assets/data/cart.json");
// xhr.send();

// // console.log(xhr);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             const response = JSON.parse(xhr.response)
//             viewCart(response)
//         } else {
//             // alert("Помилка");
//             alert(xhr.statusText);
//         }
//     }
// }


// !fetch
// fetch("assets/data/cart.json")
//     .then(resp => {
//         console.log(resp);
//         if (resp.status === 200) {
//             return resp.json();
//         } else {
//             // alert("Помилка");
//             alert(xhr.statusText);
//             return false;
//         }
//     })
//     .then(resp => {
//         viewCart(resp);
//     })


//! AXIOS
// axios("assets/data/cart.json")
//     .then(resp => {
//         console.log(resp);
//         viewCart(resp.data)
//     })
//     .catch(err => {
//         console.log(err);
//         alert(err.message)
//     });

// !jquary
// 1
$.ajax({
    url: "assets/data/cart2.json",
    type: "get",
    dataType: "json",
    success: function(resp) {
        console.log(resp);
        viewCart(resp);
    },
    error: function(err) {
        console.log(err);
        viewErr(err.statusText);
    },
})

//2
// $.ajax("assets/data/cart.json")
//     .done(resp => viewCart(resp))
//     .fail(err => viewCart(err.statusText))

function viewCart(cart) {
    let html = "";
    cart.forEach(item => {
        html += `
            <ul>
                <li>
                    ${item.name} --- ${item.price}
                </li>
            </ul>
        `
    });
    document.body.insertAdjacentHTML("afterbegin", html);
}

function viewErr(err) {
    console.log(err);
    let html =`${err}`;
    document.body.insertAdjacentHTML("afterbegin", html);
}



// !!!

function loadPage(page) {
    $.get(`pages/${page}.html`, (html) => {
        $("#page_content").html(html);
    });
}

loadPage("main");

$(function () {
    $(".nav-masthead a").on("click", function (e) {
        e.preventDefault();
        loadPage($(this).attr("href"));
        $(".nav-link.active").removeClass("active");
        $(this).addClass("active");
    })
});

