// task 1 ==============================================================
document.querySelector(".btn-1").addEventListener("click", function () {
    const r = document.querySelector("#i-1").value;
    const myCircle = new Circle(r);
    document.querySelector("#res-1").innerHTML += `
        <div>Радіус кола: ${myCircle.radius}</div>
        <div>Діаметр колв: ${myCircle.diamert}</div>
    `
});

document.querySelector(".btn-2").addEventListener("click", function () {
    const r = document.querySelector("#i-1").value;
    const myCircle = new Circle(r);
    document.querySelector("#res-1").innerHTML += `
        <div>Площа кола: ${myCircle.circleSquare()}</div>
    `
});

document.querySelector(".btn-3").addEventListener("click", function () {
    const r = document.querySelector("#i-1").value;
    const myCircle = new Circle(r);
    document.querySelector("#res-1").innerHTML += `
        <div>Довжина кола: ${myCircle.circleLength()}</div>
    `
});

// task 2===============================================================
document.querySelector(".btn-4").addEventListener("click", function () {
    const color = document.querySelector("#i-2").value;
    const ink_qty = document.querySelector("#i-3").value;
    const myMarker = new Marker(color, ink_qty);
    const txt = document.querySelector("#i-4").value;
    myMarker.showText(txt);
});

document.querySelector(".btn-5").addEventListener("click", function () {
    const refull = new newMarker();
    refull.full();
    document.querySelector("#i-3").value = 100;
});

// task 3 ==============================================================
const list = [
    new Employee({
        name: "Bob",
        position: "Manager",
        age: 30
    }),
    new Employee({
        name: "Ann",
        position: "High Manager",
        age: 32
    }),
    new Employee({
        name: "John",
        position: "Admin",
        age: 34
    })
];

document.querySelector(".btn-6").addEventListener("click", function () {
    const table = new EmpTable(list);
    table.viewHtml("res-3");
});