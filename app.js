// getting the access to preview display tag   
let previewtxt = document.getElementById('preview');
// getting the access to text area   
let input = document.getElementById('text');
// getting the access to alert bar 
let notice = document.getElementById('alert');
// getting the access to buttons 
let buttons = document.getElementsByClassName('btns');
// getting the access to character count
let wordcount = document.getElementById('wordcount');
// getting the access to word count
let words = document.getElementById('word');
var msg = document.getElementById("snackbar");

// Getting the value onkeyup   
function get() {
    var text = document.getElementById('text').value
    if (text.length === 0) {
        previewtxt.innerHTML = "Enter Something To See Here";
        wordcount.innerHTML = "0";
        words.innerHTML = "0";
        die();
    } else {
        previewtxt.innerHTML = text;
        wordcount.innerHTML = text.length;
        words.innerHTML = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
    }
}
function showToast(){
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      
}

// chnaging the text to UpperCase

function toupper() {
    get();
    uppertext = text.value.toUpperCase();
    previewtxt.innerHTML = uppertext;
    input.value = uppertext;
    msg.innerHTML= "Converted to UpperCase!"
    showToast();
}
// chnaging the text to lowercase
function tolower() {
    get();
    lowertext = text.value.toLowerCase();
    previewtxt.innerHTML = lowertext;
    input.value = lowertext;
    msg.innerHTML= "Converted to LowerCase!"
    showToast();

}
// chnaging the text to CamelCase
// defining the function first     
function camel() {
    get();
    return text.value.replace(/\w\S*/g, function (chn) {
        return chn.charAt(0).toUpperCase() + chn.substr(1).toLowerCase();
    });
}

function tocamel() {
    get();
    cameltext = camel(text.value);
    previewtxt.innerHTML = cameltext;
    input.value = cameltext;
    msg.innerHTML= "Converted to CamelCase!"
    showToast();
}

// Cpoy text to clip board 
function copytext() {
    get();
    navigator.clipboard.writeText(text.value);
    msg.innerHTML= "Text Copied!"
    showToast();
}