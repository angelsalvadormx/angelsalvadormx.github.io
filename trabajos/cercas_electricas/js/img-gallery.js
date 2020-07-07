const Elemenetportafolio = document.getElementById('portafolio');
const Pictures = Elemenetportafolio.getElementsByClassName('icon-expand');
const Background = document.getElementById('background');
const ImgBack = Background.getElementsByTagName('div')[0];

Object.keys(Pictures).forEach(key =>{
    Pictures[key].addEventListener('click', function(e){
        Background.classList.add('active');
        var UrlImg = this.style.backgroundImage;
        ImgBack.style.backgroundImage= UrlImg
    })
});

Background.addEventListener('click', e=>{
    if(e.target !== e.currentTarget) return
    Background.classList.remove('active')
})


``