// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('collapsed');
    });
});


// scroll to contact section
document.getElementById("contact").addEventListener("click", function() {
    document.querySelector(".footer-container").scrollIntoView({ behavior: 'smooth' });
});


// content 1
let number = document.getElementById('num');
let count = 0;
setInterval(() =>{
    if (count == 65){
        clearInterval();
    }
    else{
    count ++;
    number.innerHTML = count + "%";
    }
},30);

// -----users count
let number1 = document.getElementById("num-of-users");
let count1 = 980;
setInterval(() =>{
    if (count1 == 1020){
        clearInterval();
    }
    else{
    count1 ++;
    number1.innerHTML = count1;
    }
},30);

// visitors count
let number2 = document.getElementById("num-of-visitors");
let count2 = 2794;
setInterval(() =>{
    if (count2 == 2834){
        clearInterval();
    }
    else{
    count2 ++;
    number2.innerHTML = count2 ;
    }
},30);

// Sales count
let number3 = document.getElementById("num-of-sales");
let count3 = 2898;
setInterval(() =>{
    if (count3 == 2938){
        clearInterval();
    }
    else{
    count3 ++;
    number3.innerHTML = "$ "+count3 ;
    }
},30);