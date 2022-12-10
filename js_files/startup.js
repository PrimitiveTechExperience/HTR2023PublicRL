console.log("Hello World!");

function startup() {
    let id = null;
    const elem = document.getElementById("startup_img");
    let grow = 1;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (grow == 300) {
            clearInterval(id);
        } else {
            grow++
            elem.style.width = grow + "px";
            elem.style.height = grow + 50 + "px";
        }
    }
}