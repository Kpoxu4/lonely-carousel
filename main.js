let point = document.querySelectorAll('.point');
let imgeSlider = document.querySelectorAll('.imgeSlider');
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn');
let blockSlider = document.querySelector('.blockSlider');
let counter = 0;
let second = 1000*4;

point[0].classList.add('activeImge')
imgeSlider[0].classList.add('activeImge')



for(let i= 0; i < point.length; i++){
    point[i].addEventListener('click',() => {
        for(let j = 0; j < imgeSlider.length; j++){
            point[j].classList.remove('activeImge')
            imgeSlider[j].classList.remove('activeImge')
        }
        counter = i;
        imgeSlider[counter].classList.add('activeImge')
        point[counter].classList.add('activeImge')
    })
}

leftBtn.addEventListener('click',() =>{
    for(let j = 0; j < imgeSlider.length; j++){
        point[j].classList.remove('activeImge')
        imgeSlider[j].classList.remove('activeImge')
    }
    counter--;
    if(counter < 0){
        counter = imgeSlider.length - 1
    }
    imgeSlider[counter].classList.add('activeImge')
    point[counter].classList.add('activeImge')
})
rightBtn.addEventListener('click',() =>{
    for(let j = 0; j < imgeSlider.length; j++){
        point[j].classList.remove('activeImge')
        imgeSlider[j].classList.remove('activeImge')
    }
    counter++;
    if(counter > imgeSlider.length - 1){
        counter = 0
    }
    imgeSlider[counter].classList.add('activeImge')
    point[counter].classList.add('activeImge')
})

function slowSlider(){
    for(let j = 0; j < imgeSlider.length; j++){
        point[j].classList.remove('activeImge')
        imgeSlider[j].classList.remove('activeImge')
    }
    counter++;
    if(counter > imgeSlider.length - 1){
        counter = 0
    }
    imgeSlider[counter].classList.add('activeImge')
    point[counter].classList.add('activeImge')
}
let timerImg = setInterval(() => slowSlider(), second)

blockSlider.addEventListener('mouseover', () => {
    clearInterval(timerImg)
})
blockSlider.addEventListener('mouseleave', () => {
    timerImg = setInterval(() => slowSlider(), second)

})