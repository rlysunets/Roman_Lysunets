function age() {
    const age = parseInt(document.getElementById("i-1").value);
    const res = document.getElementById("res-1");
    if (age > 0 && age < 12) {
        res.innerText = "Ви - дитина";
    } else if (age >= 12 && age < 18) {
        res.innerText = "Ви - підліток";
    } else if (age >= 18 && age < 60) {
        res.innerText = "Ви - дорослий";
    } else if (age >= 60) {
        res.innerText = "Ви - пенсіонер";
    } else {
        res.innerText = "Ви вводите не коректні дані.";
    } 
}

function enterNum() {
    const num = +document.getElementById("i-2").value;
    const res = document.getElementById("res-2");
    switch (num) {
        case 0:
            res.innerText = ")";
            break;
        case 1:
            res.innerText = "!";
            break;
        case 2:
            res.innerText = "@";
            break;        
        case 3:
            res.innerText = "#";
            break;
        case 4:
            res.innerText = "$";
            break;
        case 5:
            res.innerText = "%";
            break;
        case 6:
            res.innerText = "^";
            break;
        case 7:
            res.innerText = "&";
            break;
        case 8:
            res.innerText = "*";
            break;
        case 9:
            res.innerText = "(";
            break; 
        default:
            res.innerText = "Введи від 0 до 9";
    }
}

function sumNum() {
    const num1 = +document.getElementById("i-3.1").value;
    const num2 = +document.getElementById("i-3.2").value;
    const res = document.getElementById("res-3");
    let sum = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
        res.innerText = sum;
    } else {
        res.innerText = "Ви вказали діапазон не вірно. Спочатку вкажіть менше число,а потім більше."
    }
}

function theBiggestDivider() {
    const num1 = +document.getElementById("i-4.1").value;
    const num2 = +document.getElementById("i-4.2").value;
    const res = document.getElementById("res-4");
    const minNum = num1 <= num2 ? num1 : num2;

    if (num1 === num2) {
        res.innerText = num1;
    }
    if (minNum === 0) {
        res.innerText = "на нуль ділити не можна!";
    }

    let i = minNum;
    while (i > 0) {
        if (num1 % i === 0 && num2 % i === 0) {
            res.innerText = i;
            break;
        }
        i--;
    } 
}

function allDividers() {
    const num = +Math.abs(document.getElementById("i-5").value);
    const res = document.getElementById("res-5");

    for (let i = num; i > 0; i--) {
        if (num % i === 0) {
            res.innerText += ` ${i},`;
        }
    }
}

function polindrom() {
    const num = +document.getElementById("i-6").value;
    const res = document.getElementById("res-6");
    const firstDigit = Math.trunc(num / 10000);
    const secondDigit = Math.trunc((num % 10000) / 1000);
    const foursDigit = Math.trunc((num % 100) / 10);
    const lastDigit = num % 10;
    firstDigit === lastDigit && secondDigit === foursDigit ? res.innerText = "Number is polindrom"
        : res.innerText = "Err. Try again";
}

function discount() {
    const sum = +document.getElementById("i-7").value;
    const res = document.getElementById("res-7");
    if (sum >= 200 && sum < 300) {
        res.innerText = "Discount: 3%";
    } else if (sum >= 300 && sum < 500) {
        res.innerText = "Discount:5%";
    } else if (sum >= 500) {
        res.innerText = "Discount: 7%";
    } else {
        res.innerText = "Discount is provided for purchases from 200$";
    }
}

function tenNums() {
    const res = document.getElementById("res-8");
    let plus = 0;
    let minus = 0;
    let zero = 0;
    let even = 0;
    let odd = 0;
    let allNum = '';
    for (let i = 0; i < 10; i++) {
        const num = parseInt(prompt("Enter 10 numbers"));

        if (!isNaN(num)) {
            if (num > 0) {
                plus++;
            } else if (num < 0) {
                minus++;
            } else {
                zero++;
            }
            if (num % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        } else {
            res.innerText = "";
            break;
        }
        allNum += num + " ";
        res.innerText = `NUMBERS: ${allNum}, PLUS: ${plus}, MINUS: ${minus}, ZERO: ${zero}, EVEN: ${even}, ODD: ${odd}`;
    }
}

function whatDay() {
    // const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
    // let answer = true;
    // for (let i = 0; i <= days.length - 1; i++) {
    //     if (answer) {
    //         answer = confirm(`${days[i]}.Хочеш побачити наступний день?`);
    //     } else {
    //         break;
    //     }
    // }


    let answer = true;
    let day = "";
    let i = 0;
    while (answer === true) {
        i++;
        switch (i) {
            case 1:
                day = "Понеділок";
                break;
            case 2:
                day = "Вівторок";
                break;
            case 3:
                day = "Середа";
                break;
            case 4:
                day = "Четвер";
                break;
            case 5:
                day = "П'ятниця";
                break;
            case 6:
                day = "Субота";
                break;
            case 7:
                day = "Неділя";
                i = 0;
                break;
        }
        answer = confirm(`День тижня: ${day}.Хочеш побачити наступний день?`);
    }
}

function whatNum() {
    let min = 0;
    let max = 1000;
    let average = 500;
    do {
        answer = prompt(`Ваше число >, < чи = ${average}?`);
        if (answer === ">") {
            min = average;
            average = Math.round((max - min) / 2 + average);
        }
        if (answer === "<") {
            max = average;
            average = Math.round((max - min) / 2 + min);
        }
    } while (answer !== "=") {
            alert(`Ваше число: ${average}`);
    }
}


function table() {
    const res = document.getElementById("res-11");
    let result = "";
    for (let i = 2; i <= 9; i++) {
        for (let k = 1; k <= 10; k++) {
           result += `${i} * ${k} = ${i * k} <br>`;
        }
        result += `<br>`;
    }
    res.innerHTML = result;
}

function tomorrowDate() {
    let day = parseInt(document.getElementById("i-12.1").value);
    let month = parseInt(document.getElementById("i-12.2").value);
    let year = parseInt(document.getElementById("i-12.3").value);
    const res = document.getElementById("res-12");
    let daysInMonth;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 11:
        case 12:
            daysInMonth = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            daysInMonth = 30;
            break;
        case 2:
            daysInMonth = 28;
            break;
        default:
            break;
    }
    if (month === 12 && day === 31) {
        day = 1;
        month = 1;
        year++;
    } else if (month === 2 && (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) && day === 28) {
        day++;
    } else if (month === 2 && (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) && day === 29) {
        day = 1;
        month++;
    } else {
        if (daysInMonth == day) {
            day = 1;
            month++;
        } else {
            day++;
        }
    }
    res.innerText = `Tomorrow date: ${day} : ${month} : ${year}.`;
    if (day < 0 || day > 31 || month < 0 || month > 12 || year < 0 || (month === 2 && day > 29)) {
        alert("bad date")
        res.innerText = ""
    }
}