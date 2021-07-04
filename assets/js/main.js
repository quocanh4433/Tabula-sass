
/*
Xử lí Menu khi click
-----------------------------------------------------------*/
function toggleMenu() {
    var menu = document.querySelector('.hamburger');
    var submenu = document.querySelector('.header__subnav');
    var logo = document.querySelector('.header__logo');
    var body = document.querySelector('body');
    menu.classList.toggle('hamburger-active');
    submenu.classList.toggle('subnav-active');
    logo.classList.toggle('logo-hidden');   
    body.classList.toggle('body-unscroll');   
}

/*
Xử lí Menu khi cuộn tang
-----------------------------------------------------------*/
function scrollHeader () {
    // Chọn dến header và thẻ h1
    var header = document.querySelector(".header");
    var logo = document.querySelector('.header__logo');
    var nav = document.querySelector('.header__nav nav');
    var navlink = document.querySelectorAll('.header__nav nav a');
    var phone = document.querySelector('#header-phone');
    // Lấy vị trị của header
    var positionHeader = header.offsetTop;
    if (window.pageYOffset > positionHeader) {
        header.classList.add("header--onscroll");
        logo.classList.add("logo--onscroll");
        nav.classList.add("nav--onscroll");
        phone.style.padding = "8px 20px";
        for (var i = 0; i < navlink.length; i++){
            navlink[i].classList.add('navlink--onscroll')
        }
    }
    else {
        header.classList.remove("header--onscroll");
        logo.classList.remove("logo--onscroll");
        nav.classList.remove("nav--onscroll");
        phone.style.padding = "14px 20px";
        for (var i = 0; i < navlink.length; i++){
            navlink[i].classList.remove('navlink--onscroll')
        }
    }
}

// Gọi hàm xử lí khi cuộn trang
if (screen.width > 991){
    window.onscroll = function () {
        scrollHeader()
    };
}



