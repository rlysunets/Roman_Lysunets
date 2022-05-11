// ! Універсальна функція для перевірки числа. Чи ввели число чи NaN??
function getAndCheck(inputId = "") {
    let number = document.getElementById(inputId).value;
    if (number !== "") {
        number = parseInt(number);
        if (!isNaN(number)) {
            return number;
        } else {
            return false;
        }
    } else {
        alert("Введіть число.");
        return false;
    }
}

// ! Куди відобразити результат
function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}

function isNumberPerfect(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }
    if (sum === n) {
        return true;
    } else {
        return false;
    }
    // або return sum === n; замість останього if.
}
// --task 7---------------------------------------------------------------------------------------------
function task7() {
    let num = 0;
    let res = "";
    if (getAndCheck("i-7") !== false) {
        num = getAndCheck("i-7");
    } else {
        return false; //якщо число не пройшло перевірку у функції getAndCheck то не потрібно продовжувати
    }
    if (isNumberPerfect(num)) {//якщо повернулося true -> виводимо res
        res = `Число ${num} є досконалим`;
    } else {
        res = `Число ${num} НЕ є досконалим`;
    }
    showResult(res, "res-7");
}

// function perfectNumbersInRow() {
//     const num1 = document.getElementById("i-8.1").value;
//     const num2 = document.getElementById("i-8.2").value;
//     let nums = "";
//     for (let i = num1; i < num2; i++) {
//         if (isNumberPerfect(i)) {
//             nums += i;
//         }
//     }
// }
// --task 8 -------------------------------------------------------------------------------------------------
function task8() {
    let num1 = 0;
    let num2 = 0;

    let nums = "";

    if ((getAndCheck("i-8.1") !== false) && (getAndCheck("i-8.2") !== false)) {
        num1 = getAndCheck("i-8.1");
        num2 = getAndCheck("i-8.2");
    } else {
        return false;
    }
    if (num1 > num2) {
        alert("Введіть спочатку менше число,а потім більше");
        return false;
    }
    for (let i = num1; i <= num2; i++) {
        if (isNumberPerfect(i)) {
            nums += `${i}, `;
        }
    }
    if (nums === "") {
        nums = "В ряді немає досконалих чисел";
    } else {
        nums = `В ряді присутні наступні досконалі числа: ${nums}`;
    }
    showResult(nums, "res-8");
}

// --task 3 --------------------------------------------------------------------------------------
function twoNums(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

function task3() {
    let num1 = 0;
    let num2 = 0;

    if ((getAndCheck("i-3.1") !== false) && (getAndCheck("i-3.2") !== false)) {
        num1 = getAndCheck("i-3.1");
        num2 = getAndCheck("i-3.2");
    } else {
        return false;
    }

    let result = twoNums(num1, num2);
    showResult(result, "res-3");
}
// --task 4 --------------------------------------------------------------------------------------

function factorial(n) {
    let res = 1;
    if (n === 0) {
        return res;
    }
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

function task4() {
    let num = 0;

    if (getAndCheck("i-4") !== false) {
        num = getAndCheck("i-4");
    } else {
        return false;
    }

    let result = factorial(num);
    showResult(result, "res-4");
}

// --task 5 --------------------------------------------------------------------------------------
function threeNums(a, b, c) {
    return a * 100 + b * 10 + c;
}

function task5() {
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    if ((getAndCheck("i-5.1") !== false) && (getAndCheck("i-5.2") !== false) && (getAndCheck("i-5.3") !== false)) {
        num1 = getAndCheck("i-5.1");
        num2 = getAndCheck("i-5.2");
        num3 = getAndCheck("i-5.3");
    } else {
        return false;
    }

    let result = threeNums(num1, num2, num3);
    if (result < 0) {
        alert("Тільки додатні числа, спробуй ще раз!")
        return false;
    }
    showResult(result, "res-5");
}
// --task 6 --------------------------------------------------------------------------------------
function square(a, b) {
    if (b === "") {
        return a ** 2;
    } else {
        return a * b;
    }
}

function task6() {
    let num1 = parseInt(document.getElementById("i-6.1").value);
    let num2 = parseInt(document.getElementById("i-6.2").value);

    if (isNaN(num2)) {
        // num1 = 1;
        num2 = 1;
    }

    let result = square(num1, num2);
    showResult(result, "res-6");
}


