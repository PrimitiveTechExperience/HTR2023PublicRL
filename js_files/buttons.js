let a = "";
let temp = "There's nothing here.";
// Both of these variables are 

function changeTitle() {
    // This section essentially gets the input of the user, and sets the html element with id "output"
    // to the input.
    var name = prompt("What do you want to change the title to?");
    document.getElementById('output').innerHTML = name;
}

function displays() {
    // This essentially displays the main portion of the body.
    //  If the empty section for some reason is wrong, the temp message is set.
    if (a == 0) document.getElementById('mainBody').innerHTML = temp;
    else document.getElementById('mainBody').innerHTML = a;
}

function addParagraph() {
    // Simply takes in the input of the user for a paragraph.
    // adds a simple hint if it did not exist.
    var name = prompt("What do you want in the paragraph?");
    if (!a.includes("&lt;!-- To type a literal paragraph of words, simply use the p-tags!--&gt;")) {
        a += "&lt;!-- To type a literal paragraph of words, simply use the p-tags!--&gt;\n";
    }
    a += '&lt;p&gt;\n' + name + '\n&lt;/p&gt;\n';
    displays();
}

function addHeading() {
    // Simply takes in the input of the user for a header.
    // Pretty much the same as the paragraph section.
    var name = prompt("What do you want in the heading?");
    if (!a.includes("&lt;!-- To type a heading, simply use the h#-tags! numbers dictate the size and order of the headers--&gt;\n")) {
        a += "&lt;!-- To type a heading, simply use the h#-tags! numbers dictate the size and order of the headers--&gt\n;";
        a += "&lt;!-- This example simply uses heading 1, but you can use any heading number upto 10!--&gt;\n";
    }
    a += '&lt;h1&gt;\n' + name + '\n&lt;/h1&gt;\n';
    displays();
}

function addImage() {
    // Simply takes in the input of the user for a header.
    // Pretty much the same as the paragraph section.
    var source = prompt("What image would you like to insert? (Must be a link to an image!)");
    var word = prompt("What would you like to display if the image fails to load?");
    if (!a.includes("&lt;!-- To insert an image, simply use the img-tags! --&gt;\n")) {
        a += "&lt;!-- To insert an image, simply use the img-tags! --&gt;\n";
        a += "&lt;!-- use the src=(link) to insert the image, and alt=(something) to display a word is the image fails to load --&gt;\n";
    }
    a += '&lt;img src="' + source + '" alt="' + word + '"&gt;\n';
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
