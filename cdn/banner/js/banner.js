var intervals = [];
var stop = false;
var num_banners = 0;
function banner(settings){
    num_banners = settings.length;
    settings.forEach(function(conf){
        var banner = document.getElementById(conf.id);
        setBanner(conf,banner);
        
        if(conf.hasOwnProperty('buttons') && conf.buttons === true){
            buttons(banner,conf.time);
        }
        createInterval(banner,settings.length);
    });
}

function createInterval(banner){
    console.log('===============================');
    
    //window.clearInterval(interval)
    var banner2 = document.getElementById('banner2');
    console.log('index 2',banner2);
    
    var time = banner.getAttribute('time_interval');
    
    var index_interval = banner.getAttribute('index_interval');
    console.log('banner',banner);
    console.log('index_interval',index_interval );
    console.log('intervals.length',intervals.length);
    console.log('num_banners',num_banners);
        
    if(index_interval === null){
        console.log('entra');
        if(intervals.length < num_banners){
            banner.setAttribute('index_interval',intervals.length);
            intervals.push(setInterval(function(){
                changeItem('next',banner,false);
            },time));
        }
    }else{
        var interval = setInterval(function(){
            changeItem('next',banner,false);
        },time);
        intervals[index_interval] = interval;
    }
    console.log('intervals',intervals);
}

function removeInterval(index_interval){
    console.log('********************');
    
    console.log('(-) intervals',intervals);
    console.log('index_interval',index_interval);
    
    window.clearInterval(intervals[index_interval]);
}


function buttons(banner,time){
    var btnNext = createButton('btn_next');
    var btnPrevious = createButton('btn_previous');
    btnNext.addEventListener('click',function(){
        console.log('click');
        console.log('stop',stop);
        
        if(!stop){
            changeItem('next',banner,true);
            //createInterval(time,banner);
        }
    },{
        once:true
    });

    btnPrevious.addEventListener('click',function(){
        if(!stop){
            changeItem('previous',banner,true);
            //createInterval(time,banner);
        }
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
    banner.setAttribute('time_interval',conf.time);
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

function changeItem(direction,banner,clickOnButton){
    
    if(clickOnButton === true){
        removeInterval(banner.getAttribute('index_interval'));
    }
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
        // removeEventListener('transitionend', foo);
        if(clickOnButton === true){
            createInterval(banner);
        }
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
