var hamburgerBtn = document.querySelector(".hamburger");
var closeBtn = document.querySelector(".close-right-nav");
var section = document.querySelector(".content");
var menu = document.querySelector(".mini-content");
var body = document.querySelector("body");
var homeMenuNav = document.querySelector(".mini-content .right-nav li");
var leftNav = document.querySelector(".left-nav a");
var leftNavHidden = document.querySelector(".mini-content .left-nav a");
var homeLink = document.querySelector(".right-nav a");
var portfolioLink = document.querySelector("#portfolio");
var aboutLink = document.querySelector("#about");
var hiddenPortfolioLink = document.querySelector("#hidden-portfolio");
var hiddenAboutLink = document.querySelector("#hidden-about");
var button = document.querySelector("#button");
var portfolio = document.querySelector("#target-portfolio");
var home = document.querySelector("#target-home");
var about = document.querySelector("#target-about");
var navBar = document.querySelector("nav");


$(document).ready(function () {
    if ($(document).scrollTop() === $(home).offset().top)
        homeLink.classList.add("focus");
})
$(hamburgerBtn).on("click", function() {
    $(section).fadeToggle(10, function() {
        $(menu).fadeToggle();
        menu.classList.toggle("hidden");
    });
});

$(closeBtn).on("click", function () {
    $(menu).fadeToggle(10, function () {
        $(section).fadeToggle();
        menu.classList.toggle("hidden");
    });
});

$(homeMenuNav).on("click", function () {
    $(menu).fadeToggle(10, function () {
        menu.classList.toggle("hidden");
    });
    $(section).fadeToggle();
});

$(leftNav).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(home).offset().top
    }, 900);
    homeLink.classList.add("focus");
    portfolioLink.classList.remove("focus");
    aboutLink.classList.remove("focus");
});

$(leftNavHidden).on("click", function () {
    $(menu).fadeToggle(10, function () {
        menu.classList.toggle("hidden");
    });
    $(section).fadeToggle();
});

$(homeLink).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(home).offset().top
    }, 900);
});

$(portfolioLink).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(portfolio).offset().top
    }, 900);
});

$(hiddenPortfolioLink).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(portfolio).offset().top
    }, 900, function() {
    });
    $(menu).fadeToggle(10, function () {
        menu.classList.toggle("hidden");
    });
    $(section).fadeToggle();
});

$(aboutLink).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(about).offset().top
    }, 900);
});

$(hiddenAboutLink).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(about).offset().top
    }, 900, function () {
    });
    $(menu).fadeToggle(10, function () {
        menu.classList.toggle("hidden");
    });
    $(section).fadeToggle();
});

$(button).on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $(portfolio).offset().top
    },900);
});

$(document).on("scroll", function() {
    var posFromTop = $(document).scrollTop();
    var posPortfolio = $(portfolio).offset().top;
    if (!menu.classList.contains("hidden")) {
        if (posFromTop >= posPortfolio) {
            $(menu).fadeToggle(10);
            menu.classList.toggle("hidden");
            $(section).fadeIn();
        }
    }
});

$(document).on("scroll", function () {
    var posFromTop = $(document).scrollTop();
    var posHome = $(home).offset().top;
    if (posFromTop >= posHome + 16) {
        navBar.classList.add("nav-special");
    }
    else
        navBar.classList.remove("nav-special");
});

$(document).on("scroll", function (e) {
    var posFromTop = $(document).scrollTop();
    var posHome = $(home).offset().top;
    var posPortfolio = $(portfolio).offset().top;
    var posAbout = $(about).offset().top;
    e.preventDefault();
    if (posFromTop >= posHome && posFromTop < posPortfolio) {
        homeLink.classList.add("focus");
        portfolioLink.classList.remove("focus");
        aboutLink.classList.remove("focus");
    }
    else if (posFromTop > posPortfolio && posFromTop < posAbout) {
        portfolioLink.classList.add("focus");
        homeLink.classList.remove("focus");
        aboutLink.classList.remove("focus");
    }
    else if (posFromTop >= posAbout){
        aboutLink.classList.add("focus");
        homeLink.classList.remove("focus");
        portfolioLink.classList.remove("focus");
    }
});




