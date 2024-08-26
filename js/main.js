// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// iovox
window.iovoxApi= document.createElement("script");
iovoxApi.src = "https://cdn.iovox.com/rest/v1/dni.js"
document.getElementsByTagName("head")[0].appendChild(iovoxApi);

window.iovoxApiConfig = {

    accessKey:"c0f5c6c2f259d362983d2f3ca653c186cdfd6ac7",
    actionKey: "89479a09d55c162bd76746ff2dcbbb85213e31fe",
    globalNumberFormat: "xxx-xxx-xxxx",
    sea: true,
    manualNumberUpdate:false

}

//dynamic config will be different based on where the dynamic numbers will be

window.iovoxApiConfig.requestLinks = {

    items:[
        {linkId:"__ROTATING__", selector:"[phone-selector]", poolId:"reverbPool", dialString: "1"},

    ]

};

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;

    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;

    }
}