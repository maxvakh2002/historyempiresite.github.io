/*при нажатии на кнопку оторбражается часть аккордеона*/

const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {/*при нажатии на кнопку программа отображает соседний с заголовком элемент - блок с текстом*/
    this.nextElementSibling.classList.toggle('hidden');
}

/*настройка появления кнопки*/

jQuery(document).ready(function($){
    
    $('#btnarrow').fadeOut(); //скрываем кнопку

    $(window).scroll(function () {
        
            if ($(this).scrollTop() > 500) { // при прокрутке страницы на 500 пикселей вниз
                $('#btnarrow').fadeIn();   // отображаем кнопку
            } 
        
            else {
                $('#btnarrow').fadeOut(); // в противном случае скрываем
            }
        
    });/*function-scroll*/
    
});/*function-ready*/

/*при нажатии на кнопку возвращаемся вверх сайта*/

const goTopSubtitle = document.querySelector('.jsarrow');

goTopSubtitle.addEventListener("click", goTop);

function goTop(){
    
    if (window.pageYOffset > 0){
        
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
        
    }
}