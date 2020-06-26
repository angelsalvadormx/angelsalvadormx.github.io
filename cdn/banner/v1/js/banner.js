function banner(itemsBanner){
    itemsBanner.forEach(function(banner) {
        banner = setBanner(banner);
        createTimeOut(banner.time,banner);
    });
}

function createTimeOut(time,banner){
    banner.interval = setTimeout(function(){
        changeItem(banner,'');
    },time);
}

function setBanner(banner){
    console.info('Seting banner...');
    var layer = createLayer();
    var itemBanner = null;
    var classPositon = 'active';
    banner.allowClick = true;
    banner.allowChange = true;
    banner.elementBanner = document.getElementById(banner.id);
    banner.elementBanner.classList.add('banner');    
    banner.elementBanner.insertAdjacentElement('afterbegin',layer);
    banner.items.forEach(function(item,index){
        if(index > 0){
            classPositon = 'right';
        }
        itemBanner = createItemBanner(item.image,classPositon);
        banner.elementBanner.insertAdjacentElement('beforeend',itemBanner);
    });

    if(banner.buttons === true){
        var btn_next = createButton('btn_next',banner.id,function(){
            next(banner);
        });
        banner.elementBanner.appendChild(btn_next);
        
        var btn_previous = createButton('btn_previous',banner.id,function(){
            previous(banner);
        });
        banner.elementBanner.appendChild(btn_previous);
    }
    return banner;
}
function next(banner){
    if(banner.allowChange === true){
        clearTimeout(banner.await);
        banner.await = setTimeout(function(){
            banner.allowChange = true;
            createTimeOut(banner.time,banner);
        },banner.time);
    }
    banner.allowChange = false;
    if(banner.allowClick === true){
        changeItem(banner,'next');
    }

}

function previous(banner){
    changeItem(banner,'previous');
}  

function createButton(cssClass,banner,fnClick){
    var button = document.createElement('i');
    button.setAttribute('parentBanner',banner);
    button.classList.add(cssClass);
    button.addEventListener('click',fnClick);
    return button;
}

function createItemBanner(image,classPositon){
    var itemBanner = document.createElement('section');
    itemBanner.classList.add('item-banner');
    itemBanner.classList.add(classPositon)
    itemBanner.style.backgroundImage = 'url("'+image+'")';
    return itemBanner;
}

function createLayer(){
    var layer = document.createElement('section');
    layer.classList.add('layer');
    return layer;
}

function changeItem(banner,direction){
    if(direction.length > 0){
        banner.allowClick = false;
    }
    var items = banner.elementBanner.getElementsByClassName('item-banner');
    var index = parseInt(findActive(items));
    var position = index;

    if(direction === 'previous'){
        position--;
    }else if(direction === 'next' || direction.length === 0){
        position++;
    }
    
    if(position < 0){
        position = items.length -1;
    }else if(position >= items.length){
        position = 0;
    }

    items[index].classList.remove('active');
    items[index].classList.add('left');

    items[position].classList.add('active');
    items[position].classList.remove('right');

    items[position].addEventListener('transitionend',function(){
        items[index].classList.remove('left');
        items[index].classList.add('right');
        if(banner.allowClick === true && banner.allowChange == true){
            createTimeOut(banner.time,banner);
        }
        banner.allowClick = true;
    },{
        once:true
    });
}


function findActive(items){
    return Object.keys(items).find(function(key){
        return Object.keys(items[key].classList).find(function(i){
            return items[key].classList[i] == 'active';
        });
    });
} 
