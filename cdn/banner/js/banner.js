var interval;

function banner(conf){
    var banner = document.getElementById(conf.id);
    setBanner(conf,banner);
    
    if(conf.hasOwnProperty('buttons') && conf.buttons === true){
        buttons(banner,conf.time);
    }
    createInterval(conf.time);
}

function createInterval(time){
    window.clearInterval(interval)
    interval = setInterval(function(){
        changeOrder('next');
    },time)
}

function buttons(banner,time){
    var btnNext = createButton('btn_next');
    var btnPrevious = createButton()
    btnNext.addEventListener('click',function(){
        changeOrder('next');
        createInterval(time)
    })
    btnPrevious.addEvenListener('click',function(){
        changeOrder('previous');
        createInterval(time)
    });
}



function createButton(className){
    var button = document.createElemnt('i');
    button.classList.add('className');
    return button;
}

function setBanner(conf,banner){
    
    var myClass,classInfo;
    var element = document.createElement('section');
    var items = conf.items;
    
    element.classList.add('layer');
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

function changeOrder(direction){
    console.log(direction)
    var items = document.getElementsByClassName('item-banner');
    var index = parseInt(findActive(items));
    var cont = 0;
    if(direction == 'next'){
        cont = index+1;
    }else{
        if(direction == 'previous'){
            cont = index-1;
        }
    }
    //console.log('cont',cont);
    if(cont < 0){
        cont = items.length-1;
    }else{ 
        if(items[cont] == undefined){
            cont = 0;
        }  
    }
    console.log('cont',cont);
    
    items[index].classList.remove('active');
    items[index].classList.add('left');

    items[cont].classList.add('active');
    items[cont].classList.remove('right');

    showInfobanner(cont);
    items[cont].addEventListener('transitionend',function(){
        items[index].classList.remove('left');
        items[index].classList.add('right');
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
