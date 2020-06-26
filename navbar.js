function openSideMenu() {
    document.getElementById('side-menu').style.zIndex = '3';
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('side-menu').style.opacity = '0.95';
}

function closeSideMenu() {
    document.getElementById('side-menu').style.zIndex = '-1';
    document.getElementById('side-menu').style.width = '0px';
    document.getElementById('side-menu').style.opacity = '0';
}