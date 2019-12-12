// Loader 
let i = 100;
const logo = document.getElementById('layer_SVG');
const loader = document.getElementById('loader'); 

const interval = setInterval(() => {
    i = (i > 35) ? i-2:i;
    logo.style.transform = "translateY("+i+"%)";
}, 200);

window.addEventListener('load',()=>{
    setTimeout(() => {
        clearInterval(interval);
        logo.style.transform = "translateY(0%)";
        logo.addEventListener('transitionend',()=>{
            loader.classList.add('fadeOut');
            loader.addEventListener('transitionend',()=>{
                document.getElementsByTagName('BODY')[0].style.overflow = "visible";
                document.getElementById('nameAnimation').classList.add('fadeIn');
                animation();
                setTimeout(() => {
                    loader.style.display = "none";
                }, 1000);
            })
        })
    }, 1000);
});
