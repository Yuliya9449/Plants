//  !================================== 
//Hamburger
    let a = document.querySelector(".header__logo-line");
    let nav = document.querySelector(".navigation");
    let ham = document.querySelector(".hamburger");

    a.addEventListener('click', changeNav);
    nav.addEventListener('click', changeNav);

    function changeNav(){
        nav.classList.toggle('navigation-hidden');
        ham.classList.toggle('hamburger-toggle');
    };

// !=====================================

// Section service

let buttonGardens = document.querySelector('.service__button_gardens');
let buttonPlanting = document.querySelector('.service__button_planting');
let buttonLawn = document.querySelector('.service__button_lawn');

let serviceItemsArray =[...document.querySelectorAll('.service__item')];// All of cards

let itemGardensAll = document.querySelectorAll('.service__item_gardens');// Gardens cards
let itemPlantingAll = document.querySelectorAll('.service__item_planting');// Planting cards
let itemLawnAll = document.querySelectorAll('.service__item_lawn');// Lawn cards

let classBlur = 'service__item_blur';
let classServiceButtonActive = 'service__button_active';

let counter = null;


buttonGardens.addEventListener('click', toCountActiveButtons);
buttonPlanting.addEventListener('click', toCountActiveButtons);
buttonLawn.addEventListener('click', toCountActiveButtons);


function toCountActiveButtons() {
    this.classList.toggle(classServiceButtonActive);
    counter = [...document.querySelectorAll('.service__button_active')].length ;
    return counter;
    }

buttonGardens.addEventListener('click', toToggleBlur);
buttonPlanting.addEventListener('click', toToggleBlur);
buttonLawn.addEventListener('click', toToggleBlur);

function toToggleBlur() {
    buttonGardens.disabled = false;
    buttonPlanting.disabled = false;
    buttonLawn.disabled = false;

    if (counter === 0) {
        serviceItemsArray.forEach((elem) => elem.classList.remove(classBlur));
    };
    if ( counter === 1) {
        serviceItemsArray.forEach((elem) => elem.classList.add(classBlur));
    };

    itemGardensAll.forEach((elem) => {
        if(( counter === 1 || counter === 2) && buttonGardens.classList.contains(classServiceButtonActive)){
            elem.classList.remove(classBlur);
        }});

    itemPlantingAll.forEach((elem) => {
        if(( counter === 1 || counter === 2) && buttonPlanting.classList.contains(classServiceButtonActive)){
            elem.classList.remove(classBlur);
        }});

    itemLawnAll.forEach((elem) => {
        if(( counter === 1 || counter === 2) && buttonLawn.classList.contains(classServiceButtonActive)){
            elem.classList.remove(classBlur);
        }});


    if( counter === 2) {
        if( !buttonGardens.classList.contains(classServiceButtonActive)) {
            buttonGardens.disabled = true;
        };
        if( !buttonPlanting.classList.contains(classServiceButtonActive)) {
            buttonPlanting.disabled = true;
        };
        if( !buttonLawn.classList.contains(classServiceButtonActive)) {
            buttonLawn.disabled = true;
        };
    };
}


// ! accordion ================================

const accordionIconsArray = [...document.querySelectorAll('.accordion__ico')];
let accordionItem = null;
let accordionContent = null;
let accordionIco = null;


for(let elem of accordionIconsArray) {
    elem.addEventListener('click', toToggleAccordion);
}

function toToggleAccordion(e)  {
    // e.stopPropagation();
    if(e.target.classList.contains('accordion__ico_open')) {
        toRemoveOpen(e.target);
    }
    else {
        for(let i = 0; i < accordionIconsArray.length; i++) {
            toRemoveOpen(accordionIconsArray[i]);
        }
        accordionIco = e.target;
        toAddOpen(accordionIco);
    }
}

function toAddOpen(ico) {
    setTimeout(function(){
    accordionItem = ico.closest('.prices-accordion__item');
    accordionContent = accordionItem.querySelector('.prices-accordion__content');
    ico.classList.add('accordion__ico_open');
    accordionItem.classList.add('prices-accordion__item_open');
    accordionContent.classList.add('prices-accordion__content_open');
}, 200);
}

function toRemoveOpen(ico) {
    accordionItem = ico.closest('.prices-accordion__item');
    accordionContent = accordionItem.querySelector('.prices-accordion__content');
    ico.classList.remove('accordion__ico_open');
    accordionItem.classList.remove('prices-accordion__item_open');
    accordionContent.classList.remove('prices-accordion__content_open');
}


// !=======================================



console.log ("1.  Вёрстка валидная               +10") 
console.log ("2.  Вёрстка семантическая, присутствуют:")
console.log ("    2а. header, main, footer      +3")
console.log ("    2б. Пять элементов section    +3")
console.log ("    2в. Один заголовок h1         +3")
console.log ("    2г. Четыре заголовка h2       +3")
console.log ("    2д. Один элемент nav          +3")
console.log ("    2е. Два списка ul > li >a     +3")
console.log ("    2ж. Пять кнопок button        +2")
console.log ("3.  Вёрстка соответствует макету: ")
console.log ("    3а. Блок header               +6")
console.log ("    3б. Секция welcome            +7")
console.log ("    3в. Секция about              +3  картинка съезжает")
console.log ("    3г. Секция service            +7")
console.log ("    3д. Секция prices             +7")
console.log ("    3е. Секция contacts           +7")
console.log ("    3ж. Блок footer               +7")
console.log ("4.  Требования к css: ")
console.log ("    4a. Используются флексы                        +2")
console.log ("    4б. При уменьшении масштаба остаётся в центре  +2")
console.log ("    4в. Фон тянется на всю ширину страницы         +2")
console.log ("    4г. Иконки в формате svg                       +2")
console.log ("    4д. Изображения в формате png                  +2")
console.log ("    4е. Есть favicon                               +2")
console.log ("5.  Интерактивность, реализуемая через css: ")
console.log ("    5a. Плавная прокрутка по якорям        +5")
console.log ("    5б. Ссылки в футере ведут              +5")
console.log ("    5в. Интерактивность при наведении      +5")
console.log ("    5г. Интерактивность плавная            +5")
console.log ("Итого 106 баллов")