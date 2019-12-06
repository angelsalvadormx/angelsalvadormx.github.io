/**
 * @autor Angel Salvador
 */

const header = document.getElementById('header');
const btnMenu = document.getElementById('btnMenu');
const mask = document.getElementsByClassName('ui-mask')[0];
const body = document.getElementsByTagName('BODY')[0];

window.addEventListener('scroll',()=>{    
    // Header 
    scrollY > header.offsetHeight ? header.setAttribute('scroll','true') : header.setAttribute('scroll','false');
});


// Menu

const closeMenu = () => {
    header.setAttribute('menuActive','false');
    body.style.overflow = "visible";
}

btnMenu.addEventListener('click',()=>{
    if(header.getAttribute('menuActive') != "true"){
        header.setAttribute('menuActive','true');
        body.style.overflow = "hidden";
    }else{
        closeMenu();
    }
});

// Black Space
mask.addEventListener('click',closeMenu);

