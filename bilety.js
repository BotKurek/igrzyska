function oblicz()
{
var a = document.getElementById("dni").value;
a=parseFloat(a)

if (document.getElementById("ulgowy").checked==true)
{
    document.getElementById("wynik").innerHTML='Cena twojego biletu ' + a*100 + ' zł';
}
else if(document.getElementById("normalny").checked==true)
{
    document.getElementById("wynik").innerHTML='Cena twojego biletu ' + a*200 + ' zł';
}
else if(document.getElementById("senior").checked==true)
{
    document.getElementById("wynik").innerHTML='Cena twojego biletu ' + a*150 + ' zł';
}
else
{
    document.getElementById("wynik").innerHTML='Wybierz bilet do zakupu'
    
}
}
    