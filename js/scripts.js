window.onload = () => {
    let box = document.getElementById("dynamicBoxs");
    for (let i = 0; i < 20; i++) {
        box.innerHTML += "<div> </div>";
    }
}

let count = 0;
(() => {
    document.getElementById("buttonlayout3").onclick = () => {
        if (count != 250) {
            count += 50;
            document.getElementsByTagName("div")[1].style.height = count + "px";
        } else {
            count = 0;
            document.getElementsByTagName("div")[1].style.height = count + "px";
        }
    };
})();

(() => {
    let j = 0;
    document.getElementById("dynamicBoxs").onclick = () => {
            document.getElementsByTagName("div")[1].style.backgroundColor = "blue";      
    };
})();

