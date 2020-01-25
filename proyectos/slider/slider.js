function Slider(data){
  setSlider(data.id,data.items);

}
function setSlider(idElement,items){
  // create buttons
  let nextButton = createButton('next','next-slider');
  let previousButton = createButton('previous','previous-slider');
  // Add event click to buttos
  nextButton.addEventListener('click',nextImage);
  previousButton.addEventListener('click',previousImage);
  // add buttons to DOM
  addElements(idElement,[previousButton,nextButton]);
  items.forEach(function(item){
    if(item.text != '' && item.image != ''){
      createItemSlider
    }
  })
}
function createButton(text,className){
  let button = document.createElement('i');
  button.innerText = text;
  button.classList.add(className);
  return button;
}
function createItemSlider(image,text){
  let section = document.createElement('section');
  if(image != ''){
    let main = document.createElement('main');
    main.classList.add('image-slider');
    section.append(main);
  }
  if(text != ''){
    let aside = document.createElement('aside');
    aside.innerText = text;
    section.appendChild(aside);
  }
  return section;
}
function addElements(idElement,elements){
  let slider = document.getElementById(idElement);
  elements.forEach(function(element) {
    slider.appendChild(element);
  });
} 

function changeImage(){}
function nextImage(){
  console.log('nextImage');
}
function previousImage(){
  console.log('previousimage');
}
