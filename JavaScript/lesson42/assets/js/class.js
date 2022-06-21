//  task 1 ===============================================================
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(new_radius) {
        this.radius = new_radius;
    }
    get diamert() {
        return this.radius * 2;
    }
    circleSquare() {
        return (Math.PI * (this.radius * this.radius)).toFixed(2);
    }
    circleLength() {
        return (Math.PI * this.diamert).toFixed(2);
    }
}

//  task 2 ===============================================================
class Marker{
    constructor(color, qty) {
        this.color = color;
        this.qty = qty;
    }
    showText(text) {
        let count = this.qty * 2;
        if (text.length <= count) {
            document.querySelector("#res-2").innerHTML = `
                <div style="color:${this.color}">${text}</div>
            `;
        } else {
            let textArr = [...text];
            let end = textArr.splice(count);
            document.querySelector("#res-2").innerHTML = `
                <div>
                    <span style="color:${this.color}"><b>${textArr.join("")}</b></span><span style="color: lightGrey">${end.join("")}</span>
                </div>
            `;
            alert(`Закінчилося "${this.color}" чорнило. Заправ катрідж!`)
        }
    }
}

class newMarker extends Marker {
    constructor(color, qty) {
        super(color, qty)
    }
    full() {
        this.qty = 100;
        alert(`Катрідж заправдено на ${this.qty}%`);
    }
}

//  task 3 ===============================================================
class Employee {
    constructor(empl) {
        this.name = empl.name; 
        this.position = empl.position; 
        this.age = empl.age; 
    }
}

class EmpTable {
    constructor(empList) {
        this.empList = empList;
    }
    getHtml() {
        let html = "";
        this.empList.forEach(el => {
            html += `
                <tr>
                    <td>${el.name}</td>
                    <td>${el.position}</td>
                    <td>${el.age}</td>
                </tr>
            `;
        });
        return html;
    }
    viewHtml(id) {
        document.getElementById(id).innerHTML = this.getHtml();
    }
}