const copyButtons = document.getElementsByClassName('copy');

Object.keys(copyButtons).forEach(function(key) {
    copyButtons[key].addEventListener('click',copy);
    copyButtons[key].addEventListener("mouseout", removeClass);
});

function copy(){
    const html = this.parentNode.getElementsByClassName('codeToCopy')[0].innerHTML;
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var text = '';
    if(doc.body.firstChild.tagName !== 'BUTTON'){
        text = doc.body.textContent
    }else{
        text = doc.body.innerHTML;
    }
    executeCopy(text);   
    this.classList.add('copied'); 
}

function executeCopy(text){
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.select();
    document.execCommand('Copy');
    input.remove();
}

function removeClass(){
    this.classList.remove('copied');
}