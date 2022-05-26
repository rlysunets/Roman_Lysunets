// --task 1 -------------------------------------------------------------------------------------------------
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

// !======= obj =============================================================
const car = {
    producer: "ford",
    model: "fiesta",
    year: 2014,
    averageSpeed: 80,
    fuelTank: 40,
    averageFuelConsumption: 6.3,
    drivers: [
        {
            name: "Roman",
            license: true,
        },
        {
            name: "Yliana",
            license: true,
        }
    ],
    showCarInfo: function () {
        let html = `
            <thead class="mb-3">
                <th>Інформація про автомобіль</th>
            </thead>
            <tr>
                <td><b>Виробник :</b></td>
                <td>${this.producer}</td>
            </tr>
            <tr>
                <td><b>Модель :</b></td>
                <td>${this.model}</td>
            </tr>
            <tr>
                <td><b>Рік :</b></td>
                <td>${this.year}</td>
            </tr>
            <tr>
                <td><b>Середня швидкіть :</b></td>
                <td>${this.averageSpeed}</td>
            </tr>
            <tr>
                <td><b>Бак :</b></td>
                <td>${this.fuelTank}</td>
            </tr>
            <tr>
                <td><b>Розхід палива :</b></td>
                <td>${this.averageFuelConsumption}</td>
            </tr>
        `
        document.getElementById("car-info").innerHTML = html;
    },
    addAndCheckDrivers: function () {
        const inpValue = document.getElementById("inp").value;
        if (inpValue !== "") {
            this.drivers.push({ name: inpValue, license: true, });
            document.getElementById("inp").value = "";
            car.showDrivers();
        } else {
            topPanel.info("Введіть і'мя водія!!")
        }
    },
    showDrivers: function () {
        let html = "";
        this.drivers.forEach(el => {
            html += `
                <div><b>Водій :</b> ${el.name}</div>
                <div class="mb-3"><b>Посвідчення водія :</b> ${el.license
                    ? '<span class="badge bg-success">+</span>'
                    : '<span class="badge bg-danger">-</span>'}
                </div>
            `;
        });
        document.getElementById("drivers-info").innerHTML = html;
    },
    showTime: function () {
        let html = "";
        const v = document.getElementById("inp-1").value;
        const name = document.getElementById("inp-2").value;

        const minTotal = (v / this.averageSpeed) * 60;
        const hours = parseInt(minTotal / 60);
        const min = parseInt(minTotal % 60);
        const relax = parseInt(hours / 4);
        const fuelToGo = parseInt((this.fuelTank / this.averageFuelConsumption) * 100);
        const fuel = (v < fuelToGo) ? true : false;
        
        const driversNames = [];
        this.drivers.forEach(el => {
            driversNames.push(el.name);
        })

        if (!driversNames.includes(name)) {
            topPanel.error(`${name}, Вам поїздку не дозволено!`)
        } else {
            html = `
                <ul>
                    <li>${name}, Вам поїздку дозволено!</li>
                    <li>Час в дорозі ${hours} год ${min} хв</li>
                    <li>Час на відпочинок ${relax} год</li>
                    <li>${fuel ? 'Вам вистарчить пального' : 'Вам потрібно дозаправитися'}</li>

                </ul>    
            `
        }
        document.getElementById("trip-info").innerHTML = html;
        document.getElementById("inp-1").value = "";
        document.getElementById("inp-2").value = "";
    }
}

car.showCarInfo();
car.showDrivers();

// --task 2 -------------------------------------------------------------------------------------------------
const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
    showTime() {
        let hours = this.checkAndAddZero(this.hours);
        let minutes = this.checkAndAddZero(this.minutes);
        let seconds = this.checkAndAddZero(this.seconds);
        let time = "";
        time = `
            ${hours} : ${minutes} : ${seconds}
        `;
        document.getElementById("showTime").innerHTML = time;
    },
    checkAndAddZero(value) {
        if (value < 0) {
            return topPanel.error("Тільки додатні значення!!!!");
        } 
        if (value >= 0 && value < 10) {
            return value = "0" + value;
        } else {
            return value += "";
        }
    },
    addHours() {
        const hours = Math.floor(document.getElementById("hours").value);
        let newHours = this.hours + hours;
        if (newHours >= 24) {
            time.hours = newHours % 24;
        } else {
            time.hours = newHours;
        }
    },
    addMinutes() {
        const minutes = Math.floor(document.getElementById("minutes").value);
        let newMinutes = this.minutes + minutes; 
        if (newMinutes >= 60) {
            this.minutes = newMinutes % 60;
            this.hours += Math.floor(newMinutes / 60);
        } else {
            this.minutes = newMinutes;
        }
    },
    addSeconds() {
        const seconds = Math.floor(document.getElementById("seconds").value);
        if (seconds < 0) {
            topPanel.error("Тільки додатні значення!!!!");
            return false;
        }
        let newSeconds = this.seconds + seconds;
        let newMinutes = this.minutes + Math.floor(newSeconds / 60);
        if (newSeconds >= 60) {
            this.seconds = newSeconds % 60;
            this.minutes += Math.floor(newSeconds / 60);
            this.hours = (this.hours + Math.floor(newMinutes / 60)) % 24;
        } else {
            this.seconds = newSeconds;
        }
    },
    newTime() {
        this.addHours();
        this.addMinutes();
        this.addSeconds();

        let hours = this.checkAndAddZero(this.hours);
        let minutes = this.checkAndAddZero(this.minutes);
        let seconds = this.checkAndAddZero(this.seconds);
    
        let time = "";
        time += `
            ${hours} : ${minutes} : ${seconds}
        `;
        document.getElementById("addedTime").innerHTML = time;
        document.getElementById("hours").value = "0";
        document.getElementById("minutes").value = "0";
        document.getElementById("seconds").value = "0";
    },
}

        