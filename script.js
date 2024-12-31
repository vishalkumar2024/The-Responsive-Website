let btn = document.getElementById("btn");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let para = document.querySelector("p");
let anchor = document.querySelectorAll("a");


let currMode = true;
console.log(currMode);
btn.addEventListener("click", () => {
    if (currMode) {
        console.log("white");
        body.style.backgroundColor = "black";
        body.style.color = "white";
        h1.style.color = "white";
        h2.style.color = "white";
        para.style.color = "white";

        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "white";
        }
        currMode = false;
    }
    else {
        console.log("black")
        body.style.backgroundColor = "white";
        body.style.color = "black";
        h1.style.color = "black";
        h2.style.color = "black";
        para.style.color = "black";
        for (let i = 0; i < anchor.length; i++) {
            anchor[i].style.color = "black";
        }
        currMode = true;
    }
});
