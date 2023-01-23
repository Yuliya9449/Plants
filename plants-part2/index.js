    window.addEventListener('load', function(){

    let a = document.querySelector(".header__logo-line");
    let nav = document.querySelector(".navigation");
    let ham = document.querySelector(".hamburger");

    a.addEventListener('click', changeNav);
    nav.addEventListener('click', changeNav);

    function changeNav(){
        nav.classList.toggle('navigation-hidden');
        ham.classList.toggle('hamburger-toggle');
    };
});

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