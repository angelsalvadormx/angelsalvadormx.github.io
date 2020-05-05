function banner(itemsBanner){
    itemsBanner.forEach(function(item) {
        setBanner(item);
    });
}

function setBanner(banner){
    console.info('Seting banner...');
    var layer = createLayer();
    var itemBanner = null;
    var classPositon = 'active';
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

