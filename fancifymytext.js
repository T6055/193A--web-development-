function makeBigger() {
    alert("Hello, World!"); // Display alert when the "Bigger!" button is clicked
    document.getElementById("textArea").style.fontSize = "24pt"; // Changes the font size of the text area
}

function styleText() {
    var textarea = document.getElementById("textArea");
    if (document.getElementById("fancy").checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue";
        textarea.style.textDecoration = "underline";
    } else if (document.getElementById("boring").checked) {
        textarea.style.fontWeight = "normal";
        textarea.style.color = "black";
        textarea.style.textDecoration = "none";
    }
}

function mooText() {
    let text = document.getElementById("textArea").value;
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }
    document.getElementById("textArea").value = sentences.join(". ");
}

