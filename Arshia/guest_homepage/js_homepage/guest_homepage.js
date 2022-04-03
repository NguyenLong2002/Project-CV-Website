const header = document.getElementById('header');
const menu = document.getElementById('menu');
// On/off menu 
const headerHeight = header.clientHeight;
menu.onclick = function(){
    let isClose = header.clientHeight === headerHeight;
    if (isClose){
        header.style.height = 'auto';
    }else{
         header.style.height = null;
    }
}
//Tự đóng khi chon menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    for (let i=0;i<menuItems.length;i++){
        let menuItem = menuItems[i];
        menuItem.onclick = function(){
            header.style.height = null;
        }
    }
