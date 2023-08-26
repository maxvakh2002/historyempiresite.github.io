/*при нажатии на кнопку оторбражается часть аккордеона*/

const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {/*при нажатии на кнопку программа отображает соседний с заголовком элемент - блок с текстом*/
    this.nextElementSibling.classList.toggle('hidden');
}

/*slider start*/

const slider = document.querySelector('#slider');/*в переменную записываем значение селектора, выбирающего элементы с id slider*/

const sliderItems = Array.from(slider.children);/*присваиваем переменной значение дочерних элементов HTML-коллекции SliderItems и сразу же превращаем HTML-коллекцию в массив*/

const btnsecond = document.querySelector("#btnsecond");/*в переменную записываем значение селектора, выбирающего элемент с id "btnsecond" (кнопка Вперед)*/

const btnfirst = document.querySelector("#btnfirst");/*в переменную записываем значение селектора, выбирающего элемент с id "btnsecond" (кнопка Вперед)*/

/*работа со слайдами*/

sliderItems.forEach(function(slide, index){/*обходим все элементы массива SliderItems при помощи метода forEach*/
    
    /*если открыты слайды с индексом, не равным 0 (не первые слайды), то их скрываем*/
    if(index !==0) slide.classList.add('hidden');
    
    /*добавляем индексы для каждого слайда*/
    slide.dataset.index = index;
    
    /*добавляем дата-атрибут active для первого/активного слайда*/
    sliderItems[0].setAttribute('data-active', '');
    
    /*клик по слайду*/
    slide.addEventListener('click', function(){
        showNextSlide('next');
    })
    
});

/*работа с кнопками*/

btnsecond.onclick = function(){
    
    showNextSlide('next');
} 

btnfirst.onclick = function(){
    
    showNextSlide('prev');
} 

function showNextSlide(direction){
    
    /*скрываем текущий слайд*/
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;/*получаем через dataset индекс текущего элемента*/
    
    /*применяем класс hidden и убираем атрибут data-active*/
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');
    
    /*рассчитываем следующий индекс в зависимости от направления движения, заданного кнопкой*/
    
    let nextSlideIndex;
    
    if(direction === 'next'){
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0: currentSlideIndex + 1;
    }
    else if(direction === 'prev'){
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }
    
    /*Включаем следующий слайд*/
    
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);/*присваиваем переменной nextSlide querySelector, который работает с каждым следующим индексом элементов массива, находим следующий слайд*/
    
    nextSlide.classList.remove('hidden');/*убираем у каждого следующего слайда класс hidden*/
        
    nextSlide.setAttribute('data-active', '');/*переносим data-active на следующий, активный слайд*/
    
}

/*slider end*/
