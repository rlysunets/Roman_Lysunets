// task1=======================================================
const task1 = document.querySelector(".task1");
const divText = document.createElement("div");
divText.setAttribute("class", "div_text");
divText.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, quo! amet consectetur adipisicing elit. Omnis, quo!";
task1.append(divText);

const textArea = document.createElement("textarea");
textArea.setAttribute("class", "text_area");
textArea.innerText = divText.outerText;
task1.append(textArea);
textArea.hidden = true;
        
document.body.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.code === "KeyE") {
        e.preventDefault();
        divText.hidden = true;
        textArea.hidden = false;
    }
});

document.body.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.code === "KeyS") {
        e.preventDefault();
        divText.innerText = textArea.value;
        textArea.hidden = true;
        divText.hidden = false;
    }
});

// task3=======================================================

// ! Не знаю як зробити щоб функція зупиняла роботу при mouseup 

const square = document.createElement("div");
square.setAttribute("class", "square");
divText.append(square);

document.body.addEventListener("mousedown", handler, {once: true});

function handler(e) {
    if (e.target === square) {
        const squareX = e.clientX;
        const squareY = e.clientY;
        document.body.addEventListener("mousemove", (e) => {
            const moveX = e.clientX;
            const moveY = e.clientY;
            
            if (moveX > squareX || moveY > squareY) {
                divText.style.width = 400 + moveX - squareX + "px";
                divText.style.height = 150 + moveY - squareY + "px";
            }
        });
        // document.body.addEventListener("mouseup", () => {
        //     console.log(1);
        //     document.body.removeEventListener("mousedown", handler);
        //     console.log(2);
        // });
    }
    // document.body.removeEventListener("mousedown", handler);
}




// !!!! example => виконаеться 1 раз
// document.body.addEventListener("click", hello);
// function hello() {
//     console.log("Hello");
//     document.body.removeEventListener("click", hello);
// }

