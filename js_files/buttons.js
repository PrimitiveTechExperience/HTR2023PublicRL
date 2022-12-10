let a = "";
let temp = "There's nothing here.";

function website_startup() {
    return 0;
}

function changeTitle() {
    var name = prompt("What do you want to change the title to?");
    document.getElementById('output').innerHTML = name;
}

function displays() {
    if (a == 0) document.getElementById('mainBody').innerHTML = temp;
    else document.getElementById('mainBody').innerHTML = a;
}

function addParagraph() {
    var name = prompt("What do you want in the paragraph?");
    a += name;
    displays();
}

function fileToText(file, callback) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        callback(reader.result)
    };
}

function save(content, fileName, mime) {
    const blob = new Blob([content], {
        tipe: mime
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
}
