var interval;
var stop = false;
function banner(settings){
    settings.forEach(function(conf){
        var banner = document.getElementById(conf.id);
        console.log(banner)
        setBanner(conf,banner);
        
        if(conf.hasOwnProperty('buttons') && conf.buttons === true){
            buttons(banner,conf.time);
        }
        createInterval(conf.time,banner);
    });
}

function createInterval(time,banner){
    window.clearInterval(interval)
    interval = setInterval(function(){
        changeOrder('next',banner);
    },time);
}

function buttons(banner,time){
    
    var btnNext = createButton('btn_next');
    var btnPrevious = createButton('btn_previous');
    btnNext.addEventListener('click',function(){
        console.log(this)
        if(!stop){
            changeOrder('next',banner);
            //createInterval(time,banner);
        }
    });
    btnPrevious.addEventListener('click',function(){
        changeOrder('previous',banner);
        //createInterval(time,banner);
    });
    banner.insertAdjacentElement('afterbegin',btnNext);
    banner.insertAdjacentElement('afterbegin',btnPrevious);
}

function createButton(className){
    var button = document.createElement('i');
    button.classList.add(className);
    return button;
}

function setBanner(conf,banner){
    var myClass,classInfo;
    var element = document.createElement('section');
    var items = conf.items;
    
    element.classList.add('layer');
    banner.classList.add('banner');
    banner.insertAdjacentElement('afterbegin',element);

    Object.keys(items).forEach(function(key,i){
        myClass = 'right';
        classInfo = '';
        var htmlHeader = '', htmlContent = '';
        if(i == 0){
            myClass = 'active';
            classInfo = 'active';
        }

        if(!items[key].hasOwnProperty('title_card') && !items[key].hasOwnProperty('content_card')){
            classInfo += " hidden";
        }else{
            
        }
        
        if(items[key].hasOwnProperty('title_card')){
            htmlHeader = `
                <header>
                    <h3>${items[key].title_card}</h3>
                </header>    
            `;
        }

        if(items[key].hasOwnProperty('content_card')){
            htmlContent = `
                <i class='divider'></i>
                <main><p>${items[key].content_card} </p></main>
            `;
        }

        banner.innerHTML += `
            <section class="item-banner ${myClass}" style="background-image:url(${items[key].image});"></section>
            <section class="info-item ${classInfo}">
                ${htmlHeader}
                ${htmlContent}
            </section>
            `;
    });
}

function changeOrder(direction,banner){
    console.log('banner',banner);
    console.log(banner.getElementsByClassName('item-banner'));
    
    stop = true;
    var items = banner.getElementsByClassName('item-banner');
    var index = parseInt(findActive(items));
    var cont = 0;
    if(direction == 'next'){
        cont = index+1;
    }else{
        if(direction == 'previous'){
            cont = index-1;
        }
    }
    if(cont < 0){
        cont = items.length-1;
    }else{ 
        if(items[cont] == undefined){
            cont = 0;
        }  
    }
    
    items[index].classList.remove('active');
    items[index].classList.add('left');

    items[cont].classList.add('active');
    items[cont].classList.remove('right');

    showInfobanner(cont);
    items[cont].addEventListener('transitionend',function(){
        items[index].classList.remove('left');
        items[index].classList.add('right');
        stop = false;
    },{
        once:true
    });
}

function showInfobanner(index){
    var items = document.getElementsByClassName('info-item');
    var found = findActive(items);

    if(found != undefined && index != found){
        items[found].classList.remove('active');
    }
    items[index].classList.add('active');
}

function findActive(items){
    return Object.keys(items).find(function(key){
        return Object.keys(items[key].classList).find(function(i){
            return items[key].classList[i] == 'active';
        });
    });
}
