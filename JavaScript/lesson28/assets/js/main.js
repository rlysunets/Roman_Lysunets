function sum() {
    alert(Math.round((0.1 + 0.2)*10)/10);
}

function sum2() {
    const num1 = "1";
    const num2 = 2;
    alert(parseInt(num1) + num2);
}

function findFiles() {
    const memorySize = prompt("Enter the size of your flash drive");
    const res = Math.trunc((memorySize * 1024) / 820);
    if (isNaN(res)) {
        alert("Try again please. You must enter size in numbers)");
    } else {
        if (res === 1) {
            alert(`You can fit ${res} file`);
        } else {
            alert(`You can fit ${res} files`);
        }
    }  
}

function findChocolates() {
    const money = +prompt("How much money do you have?");
    const price = +prompt("What is chocolate price?");
    const canBuy = Math.trunc(money / price);
    const rest = Math.round((money - (price * canBuy)) * 100) / 100;
    (money >= price) ? alert(`You can buy: ${canBuy} chocolates. The rest is: ${rest} $`) :
        alert("You don't have enough money!");
}

function numViceVersa() {
    const num = prompt("Enter number three-digit number");
    const firstDigit = Math.trunc(num / 100);
    const secondDigit = Math.trunc((num % 100) / 10);
    const lastDigit = num % 10;
    alert(lastDigit * 100 + secondDigit * 10 + firstDigit);
}

function percent() {
    const amount = prompt("Enter amount");
    const percent = (5 / 12) * 2;
    const amountPersent = Math.round((percent * amount / 100) * 100) / 100;
    alert(`You will recive ${amountPersent} $ in two months`);
}

function moreLessZero() {
    const num = prompt("Enter number");
    if (num > 0) {
        alert("PLUS");
    } else if (num < 0) {
        alert("MINUS");
    } else {
        alert("ZERO");
    }
}

function trueAge() {
    const age = prompt("How old are you?");
    if (age > 0 && age <= 120) {
        alert("You are welcome!");
    } else {
        alert("Are you sure? Try again.")
    }
}

function numModule() {
    const num = +prompt("Enter number");
    // mATH -> метод
    // alert(Math.abs(num));

    // Метематично (якось так)
    (num >= 0) ? alert(num) : alert(-num);
}

function time() {
    const hours = prompt("Enter hours");
    const minutes = prompt("Enter minutes");
    const seconds = prompt("Enter seconds");
    const now = new Date();
    if (hours == now.getHours() && minutes == now.getMinutes() && seconds == now.getSeconds()) {
        alert("Your clock shows the correct time!") 
    } else {
        alert(`Your clock shows the wrong time. Now is ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}!`)
    }
}

function quarter() {
    const x = prompt("Enter x");
    const y = prompt("Enter y");
    if (x > 0 && y > 0) {
        alert("Перша чверть");
    } else if (x < 0 && y > 0) {
        alert("Друга чверть");
    } else if (x < 0 && y < 0) {
        alert("Третя чверть");
    } else if (x > 0 && y < 0) {
        alert("Четверта чверть");
    } else if (x == 0) {
        alert("Точка на осі абсцис");
    } else {
        alert("Точка на осі ординат");
    }
}

function month() {
    const monthNum = +prompt("Введіть номер місяця");
    switch (monthNum) {
        case 1:
            alert("Січень");
            break;
        case 2:
            alert("Лютий");
            break;
        case 3:
            alert("Березень");
            break;        
        case 4:
            alert("Квітень");
            break;
        case 5:
            alert("Травень");
            break;
        case 6:
            alert("Червень");
            break;
        case 7:
            alert("Липень");
            break;
        case 8:
            alert("Серпень");
            break;
        case 9:
            alert("Вереень");
            break;
        case 10:
            alert("Жовтень");
            break;
        case 11:
            alert("Литопад");
            break;
        case 12:
            alert("Грудень");
            break;  
        default:
            alert(`Забагато, їх 12)`);
    }
}

function calc() {
    const x = +prompt("Введіть x");
    const y = +prompt("Введіть y");
    const action = prompt("Enter action");
    switch (action) {
        case "+":
            alert(`Сума = ${x + y}`);
            break;
        case "-":
            alert(`Різниця = ${x - y}`);
            break;
        case "*":
            alert(`Добуток = ${x * y}`);
            break;
        case "/":
            alert(`Частка = ${x / y}`);
            break;  
        default:
            alert("Немає такої дії, введіть +, -, * або /");
    }
}

function biggerNum() {
    const num1 = +prompt("Enter number #1");
    const num2 = +prompt("Enter number #2");
    (num1 >= num2) ? alert(num1) : alert(num2);
}

function fiveDevided() {
    const num = +prompt("Enter number");
    (num % 5 == 0) ? alert("True") : alert("False"); 
}

function helloEarth() {
    const home = prompt("З якої ти планети?");
    (home == "Земля" || home == "земля") ? alert("Привіт, землянин!") : alert("Привіт, іншопланетянин!");
}

function whoAreYou() {
    const age = prompt("Скільки тобі років?");
    if (age > 0 && age <12) {
        alert("Ви-дитина!");
    } else if (age >= 12 && age < 18) {
        alert("Ви-підліток!");
    } else if (age >= 18 && age < 60) {
        alert("Ви-дорослий!");
    } else if (age >= 60) {
        alert("Ви-пенсіонер!");
    } else {
        alert("Введіть Ваш вік!");
        whoAreYou();
    }
}

function enterNum() {
    const num = +prompt("Enter num");
    switch (num) {
        case 0:
            alert(")");
            break;
        case 1:
            alert("!");
            break;
        case 2:
            alert("@");
            break;        
        case 3:
            alert("#");
            break;
        case 4:
            alert("$");
            break;
        case 5:
            alert("%");
            break;
        case 6:
            alert("^");
            break;
        case 7:
            alert("&");
            break;
        case 8:
            alert("*");
            break;
        case 9:
            alert("\(");
            break; 
        default:
            alert(`Введи від 0 до 9`);
    }
}