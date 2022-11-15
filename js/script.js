var ime = document.getElementById("ime");
var email = document.getElementById("email");
var prezime = document.getElementById("prezime");
// var pol=document.getElementsByClassName("pol");
var datumPolaska=document.getElementById("datumPolaska");
var datumOdlaska=document.getElementById("datumOdlaska");
var destinacija=document.getElementById("destinacija");
var brOsoba=document.getElementById("brojOsoba");

var dugme = document.getElementById("b1");
dugme.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Ime: " + ime.value + "\n"+
"Email: " + email.value + "\n"+
"Prezime: " + prezime.value+"\n"+
"Datum Polaska:"+datumPolaska.value+"\n"+
"Datum Odlaska:"+datumOdlaska.value+"\n"+
"Destinacija"+ destinacija.value+"\n"+
"Broj Osoba"+brOsoba.value);
})