var header = document.getElementById('header');
var icon = document.getElementById('menu');
var headerHeight = header.clientHeight
icon.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

const menuItems = document.querySelectorAll('.menu li a[href*="#"]');
for (let i = 0; i < menuItems.length; i++) {
    let menuItem = menuItems[i];
    menuItem.onclick = function () {
        header.style.height = null;
    }
}