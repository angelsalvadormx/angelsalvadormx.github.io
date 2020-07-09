const Elemenetportafolio = document.getElementById('portfolio');
const Pictures = Elemenetportafolio.getElementsByClassName('item-portfolio');
const Background = document.getElementById('background');
const BtnClose = document.getElementById('close');
const ImgBack = Background.getElementsByTagName('div')[0];
const Body = document.getElementsByTagName('body')[0];

Object.keys(Pictures).forEach(key =>{
    Pictures[key].addEventListener('click', function(e){
        Background.classList.add('active');
        Body.style.overflow = "hidden";
        var UrlImg = this.style.backgroundImage;
        ImgBack.style.backgroundImage= UrlImg
    })
});

function close(Background) {
    Background.classList.remove('active');
    Body.style.overflow = "visible";   
}

BtnClose.addEventListener('click',function(){close(Background)},false);
Background.addEventListener('click',function(e){
    if(e.target !== this){
        return;
    }
    close(Background);    
})