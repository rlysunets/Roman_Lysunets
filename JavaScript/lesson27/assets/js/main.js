function userName() {
  const name = prompt("Enter your name");
  alert(`Hello, ${name}!`);
}

function userAge() {
  const birthYear = prompt("Enter your birth year");
  const currentYear = 2022;
  const age = currentYear - birthYear;
  if (age < 0) {
    alert(`You are not born yet!`);
  } else if (age > 100) {
    alert(`Xa-xa! You are the same age as the dinosaur!`);
  } else {
    alert(`Your age is ${age}!`);
  }
}

function squarePerimetr() {
  const side = prompt("Enter square side");
  alert(`Square perimetr is: ${side ** 2}!`);
}

function circleSquare() {
  const radius = prompt("Enter circle radius");
  const square = parseInt(Math.PI * radius ** 2 * 100);
  alert(`Circle square is: ${square / 100}!`);
}

function speed() {
  const distance = prompt("Enter distance");
  const time = prompt("Enter travel time");
  const speed = distance / time;
  alert(`You need to move at a speed of ${speed} kilometers per hour!`);
}

function exchange() {
  const dollar = prompt("Enter the amount of dollars");
  const course = 0.95;
  alert(`You will receive ${dollar * course} euros!`);
}

function cheangeLastNum() {
  const num = prompt("Введіть 5ти значне число");
  const first4Char = parseInt(num / 10);
  const lastChar = num % 10;
  const res = lastChar * 10000 + first4Char;
  if (num.length === 5) {
    alert(res);
  } else {
    alert("Ви ввели не 5ти значне число, спробуйте ще раз!");
  }
}

function monthSalary() {
  const salary = 250;
  const sales = prompt("Вкажіть суму продажів за місяць");
  const percent = (sales * 10) / 100;
  const res = salary + percent;
  alert(`Ваша зарплата за цей міяць: ${res} $`);
}
