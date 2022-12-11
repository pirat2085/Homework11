function compares() {
    var a=document.getElementById("num1").value;
    var b=document.getElementById("num2").value;
    if (a<b) {
        alert('a<b');
    } else if (a===b) {
        alert('a===b');
    } else alert('a>b');
}

function readstring() {
    var resPromt = prompt("Pleas number with 0 at the end");
    if (resPromt%10==0) {
        alert('TRUE');
    }
}
var numplus='1';
function plusone1() {
    alert(numplus)
    numplus++;
}

var initialnumber = prompt("please write initital number")
function plusone2() {
    alert(initialnumber)
    initialnumber++;
}
