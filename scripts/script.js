var imgSlider = document.getElementById("header");
var i = 1;
var nav = document.getElementById("nav");
var btn = document.getElementById("topBtn");
var allProd = document.querySelectorAll('.all');
var mainProd = document.querySelectorAll('.main');
var drinkProd = document.querySelectorAll('.drink');
var sandwitchProd = document.querySelectorAll('.sandwitch');
var salSopProd = document.querySelectorAll('.salSop');
var dessertProd = document.querySelectorAll('.dessert');
var count = 0;

function next(){
    i++;
    imgSlider.style.backgroundImage = `url('images/img${i}.png')`;
    if(i === 5){
        i = 1;
        imgSlider.style.backgroundImage = `url('images/img${i}.png')`;
    } 
}

function previous(){
    i--;
    imgSlider.style.backgroundImage = `url('images/img${i}.png')`;
    if(i === 0){
        i = 4;
        imgSlider.style.backgroundImage = `url('images/img${i}.png')`;
    } 
}

setInterval(next , 5000);

window.onscroll = function (){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        nav.style.position = 'fixed';
        nav.style.backgroundColor = '#aa5e31';
        nav.style.zIndex = '99';
        btn.style.display = "block";
    }else{
        nav.style.backgroundColor = '#00000059';
        nav.style.position = 'absolute';
        btn.style.display = "none";
    }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function allProducts() {
    document.querySelectorAll('#menu li')[0].classList.add("active");
    document.querySelectorAll('#menu li')[0].nextElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'block';
        
    }
}

function mainProducts() {
    document.querySelectorAll('#menu li')[1].classList.add("active");
    document.querySelectorAll('#menu li')[1].previousElementSibling.classList.remove("active");
    document.querySelectorAll('#menu li')[1].nextElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'none';
        
    }
    for(var p = 0 ; p < mainProd.length ; p++){
    mainProd[p].style.display = 'block';
    }
}

function sandwitchProducts(){
    document.querySelectorAll('#menu li')[2].classList.add("active");
    document.querySelectorAll('#menu li')[2].previousElementSibling.classList.remove("active");
    document.querySelectorAll('#menu li')[2].nextElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'none';
        
    }
    for(var p = 0 ; p < sandwitchProd.length ; p++){
        sandwitchProd[p].style.display = 'block';
    }
}

function salSopProducts(){
    document.querySelectorAll('#menu li')[3].classList.add("active");
    document.querySelectorAll('#menu li')[3].previousElementSibling.classList.remove("active");
    document.querySelectorAll('#menu li')[3].nextElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'none';
        
    }
    for(var p = 0 ; p < salSopProd.length ; p++){
        salSopProd[p].style.display = 'block';
    }
}

function dessertProducts(){
    document.querySelectorAll('#menu li')[4].classList.add("active");
    document.querySelectorAll('#menu li')[4].previousElementSibling.classList.remove("active");
    document.querySelectorAll('#menu li')[4].nextElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'none';
        
    }
    for(var p = 0 ; p < dessertProd.length ; p++){
        dessertProd[p].style.display = 'block';
    }
}

function drinkProducts() {
    document.querySelectorAll('#menu li')[5].classList.add("active");
    document.querySelectorAll('#menu li')[5].previousElementSibling.classList.remove("active");
    for(var p = 0 ; p < allProd.length ; p++){
        allProd[p].style.display = 'none';
        
    }
    for(var p = 0 ; p < drinkProd.length ; p++){
        drinkProd[p].style.display = 'block';
    }
}

document.getElementById('allCount').innerHTML = `(${allProd.length})`;
document.getElementById('mainCount').innerHTML = `(${mainProd.length})`;
document.getElementById('sandCount').innerHTML = `(${sandwitchProd.length})`;
document.getElementById('salCount').innerHTML = `(${salSopProd.length})`;
document.getElementById('dessertCount').innerHTML = `(${dessertProd.length})`;
document.getElementById('drinkCount').innerHTML = `(${drinkProd.length})`;

function addToCart(){
    count++;
    document.querySelector('#counter span').innerHTML = count;
}