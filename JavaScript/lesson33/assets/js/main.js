// task1=======================================================
const playList = [
{
 author: "LED ZEPPELIN",
 song:"STAIRWAY TO HEAVEN"
},
{
 author: "QUEEN",
 song:"BOHEMIAN RHAPSODY"
},
{
 author: "LYNYRD SKYNYRD",
 song:"FREE BIRD"
},
{
 author: "DEEP PURPLE",
 song:"SMOKE ON THE WATER"
},
{
 author: "JIMI HENDRIX",
 song:"ALL ALONG THE WATCHTOWER"
},
{
 author: "AC/DC",
 song:"BACK IN BLACK"
},
{
 author: "QUEEN",
 song:"WE WILL ROCK YOU"
},
{
 author: "METALLICA",
 song:"ENTER SANDMAN"
}
];
const task1 = document.querySelector(".task1");
const list = document.createElement("ol");
list.style.border = "1px dashed black";
task1.append(list);

function showList() {
    playList.forEach(el => {
        const li = document.createElement("li");
        li.innerHTML = `
            <b>${el.author} :</b>  ${el.song}
        `;
        list.append(li);
    });
}

showList();
// task2=======================================================

const task2 = document.querySelector(".task2");
const btn = document.createElement("button");
btn.innerText = "Відкрити";
btn.setAttribute("type", "button");
btn.setAttribute("class", "btn btn-danger");
task2.append(btn);

const modal = document.createElement("div");
const btnX = document.createElement("button");
const divBtn = document.createElement("div");
btnX.innerText = "X";
btnX.setAttribute("class", "btnX")
modal.append(divBtn);
divBtn.append(btnX);
modal.setAttribute("class", "");
document.body.append(modal);
btn.onclick = showModal;    
btnX.onclick = hideModal;    

function showModal() {
    modal.classList.add("modal");
    btnX.classList.remove("btnX");
    btn.setAttribute("disabled", "disabled");
}

function hideModal() {
    modal.classList.remove("modal");
    btnX.classList.add("btnX");
    btn.removeAttribute("disabled", "disabled");
}

// task3====================================================================================

const task3 = document.querySelector(".task3");

const red = document.createElement("div");
red.setAttribute("class", "circle red");
red.setAttribute("color", "red");
task3.append(red);
const orange = document.createElement("div");
orange.setAttribute("class", "circle");
orange.setAttribute("color", "orange");
task3.append(orange);
const green = document.createElement("div");
green.setAttribute("class", "circle");
green.setAttribute("color", "green");
task3.append(green);

const btnChangeColor = document.createElement("button");
btnChangeColor.setAttribute("class", "btn btn-success");
btnChangeColor.setAttribute("type", "button");
btnChangeColor.innerText = "NEXT";
task3.append(btnChangeColor);

btnChangeColor.onclick = changeColor;

const colors = document.querySelectorAll(".circle");
let count = 0;

function changeColor() {
    const now = colors[count];
    now.classList.remove(now.getAttribute("color"));
    count++;
    if (count > 2) count = 0;
    const currentLight = colors[count];
    currentLight.classList.add(currentLight.getAttribute("color"));
}
