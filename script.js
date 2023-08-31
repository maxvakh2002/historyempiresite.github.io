/*при нажатии на кнопку оторбражается часть аккордеона*/

const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {/*при нажатии на кнопку программа отображает соседний с заголовком элемент - блок с текстом*/
    this.nextElementSibling.classList.toggle('hidden');
}

/*slider start*/

const sliderImages = document.querySelectorAll('.slider_img'),
sliderLine = document.querySelector('.slider_line'),
sliderDots = document.querySelectorAll('.slider_dot'),
sliderBtnPrev = document.querySelector('.slider_btn-prev'),
sliderBtnNext = document.querySelector('.slider_btn-next');

let SliderCount = 0,
    SliderWidth;

window.addEventListener('resize', ShowSlide);

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function ShowSlide(){
    SliderWidth = document.querySelector('.slider').offsetWidth; /*задаем SliderWidth значение ширины slider, полученное через querySelector*/
    sliderLine.style.width = SliderWidth * sliderImages.length + 'px';/*длине sliderLine присваиваем значение SliderWidth умноженное на длину массива sliderImages*/
    sliderImages.forEach(item => item.style.width = SliderWidth + 'px');/*применяется при изменении экрана*/
    
    rollSlider();
}

ShowSlide();

function nextSlide(){
    
    SliderCount++;
    if(SliderCount >= sliderImages.length){
        SliderCount = 0;
    }
    
    rollSlider();
    thisSlide(SliderCount);
    
}

function prevSlide(){
    
    SliderCount--;
    if(SliderCount < 0){
        SliderCount = sliderImages.length - 1;
    }
    
    rollSlider();
    thisSlide(SliderCount);
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-SliderCount * SliderWidth}px)`;
}

function thisSlide(index){
    sliderDots.forEach(item => item.classList.remove('active_dot'));
    sliderDots[index].classList.add('active_dot');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () =>{
        SliderCount = index;
        rollSlider();
        thisSlide(SliderCount);
    })
})

/*slider end*/
