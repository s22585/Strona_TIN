var licznik = document.querySelector(".licznik");
var ile = localStorage.getItem("wyswietlenia");

if(ile){
ile = Number(ile)+1;
localStorage.setItem("wyswietlenia", ile);
}else{
ile = 1;
localStorage.setItem("wyswietlenia", 1);
}
licznik.innerHTML=ile;