$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 30) {
      $(".navbar").addClass("navbar-white");
    } else {
      $(".navbar").removeClass("navbar-white");
    }
  });
});

const btn = document.querySelector(".buttonpreview1");
const def = document.querySelector(".defpreview");
const def2 = document.querySelector(".defpreview div");
const lien = document.querySelector(".liensite");

let open = false; //boolean
let open2 = false;
let open3 = false;
btn.addEventListener("click", () => {
  //ecoute le clique / debut de la fonction
  open = !open; //a chaques cliks ça change le valeur de open (true/false)
  open2 = !open2;
  open3 = !open3;
  open ? def.classList.add("open") : def.classList.remove("open");
  // verifie la valeur de open (open ?) si c est ture : si c'est false;
  open2 ? def2.classList.add("open2") : def2.classList.remove("open2");
  open3 ? lien.classList.add("open3") : lien.classList.remove("open3");
});

const btn1 = document.querySelector(".buttonandroid1");
const def1 = document.querySelector(".defandroid");
const def12 = document.querySelector(".def1");

let open1 = false; //boolean
let open12 = false;
btn1.addEventListener("click", () => {
  //ecoute le clique / debut de la fonction
  open1 = !open1; //a chaques cliks ça change le valeur de open (true/false)
  open12 = !open12;
  console.log(open1, open12);
  open1 ? def1.classList.add("open1") : def1.classList.remove("open1");
  // verifie la valeur de open (open ?) si c est ture : si c'est false;
  open12 ? def12.classList.add("open12") : def12.classList.remove("open12");
});

const boutton = document.querySelector(".buttonstage1");
const img = document.querySelector(".defstage");
const txt = document.querySelector(".def2");

let imgopen = false; //boolean
let txtopen = false;
boutton.addEventListener("click", () => {
  //ecoute le clique / debut de la fonction
  imgopen = !imgopen; //a chaques cliks ça change le valeur de open (true/false)
  txtopen = !txtopen;
  console.log(imgopen, txtopen);
  imgopen ? img.classList.add("imgopen") : img.classList.remove("imgopen");
  // verifie la valeur de open (open ?) si c est ture : si c'est false;
  txtopen ? txt.classList.add("txtopen") : txt.classList.remove("txtopen");
});
