function zatwierdz(){
var a = document.getElementById("odp1").checked==true
var b = document.getElementById("odp2").checked==true
var c = document.getElementById("odp3").checked==true
var d = document.getElementById("odp4").checked==true
var e = document.getElementById("odp5").checked==true
var f = document.getElementById("odp6").checked==true

if(a && b && c && d && e && f){
    document.getElementById("wynikkonkurs").innerHTML="Gratulacje wygrałes Bilet-VIP"
}
else{
    document.getElementById("wynikkonkurs").innerHTML="Nie udało się"
}
}