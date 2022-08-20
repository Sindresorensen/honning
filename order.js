/* Setter dato for hentedato
var today = new Date();
var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

if (today.getMonth() < 10) {
    date = today.getFullYear() + "-0" + (today.getMonth() + 1) + "-" + today.getDate();
}

document.getElementById("date").value = date;
*/
var error = document.getElementById("error");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var type = document.getElementById("type");
var ant = document.getElementById("ant");
var dato = document.getElementById("date");
var submit = document.getElementById("submit");


var fn = "";
var ln = "";
var fn = "";
var tp = 0;
var at = "";
var dt = 0;

function scroll() {
    window.scrollTo(0, 250);
}

submit.onclick = function() {

    if (firstName.value == "" || 
        lastName.value == "" || 
        email.value == "" ||
        type.value == 0 ||
        ant.value == "") 
        {
            error.style.display = "block";
            scroll();
        }
    else {
        fn = firstName.value;
        ln = lastName.value;
        em = email.value;
        tp = type.value;
        at = ant.value;

        if (date.value != 0) {
            dt = date.value;
        }
        else {
            dt = null;
        }

        save(fn, ln, em, tp, at, dt);
    }
}

function save(fn, ln, em, tp, at, dt) {

    
    
    /*alert(fn + " " + ln + "\n" + em + "\n" + tp + "\n" + at + "\n" + dt);*/
}



/*Hindrer bruker i å reloade før dataen er samlet*/
window.onbeforeunload = function() {

    if (firstName.value != "" || 
        lastName.value != "" || 
        email.value != "" ||
        type.value != 0 ||
        ant.value != "" ||
        date.value != 0) {
            return "Er du sikker på at du vil lukke siden?";
        }
  }