/*при нажатии на кнопку оторбражается часть аккордеона*/

const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {/*при нажатии на кнопку программа отображает соседний с заголовком элемент - блок с текстом*/
    this.nextElementSibling.classList.toggle('hidden');
}
