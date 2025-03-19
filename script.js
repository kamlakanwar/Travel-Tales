let SearchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let signinBtn = document.querySelector('.signin-btn');
let signinForm = document.querySelector('.signin-form-container');
let signinFormClose = document.querySelector('#signin-form-close');
let loginBtn = document.querySelector('.login-btn');
let loginForm = document.querySelector('.login-form-container');
let loginFormClose = document.querySelector('#login-form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    SearchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    signinForm.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

SearchBtn.addEventListener('click', () => {
    SearchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

signinBtn.addEventListener('click', () =>{
    signinForm.classList.add('active');
});

signinForm.addEventListener('click', () =>{
    signinForm.classList.add('active');
});

signinFormClose.addEventListener('click', () =>{
    signinForm.classList.remove('active');
});

loginBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

loginForm.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

loginFormClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

