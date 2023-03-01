let form = document.querySelector('form.review-form');
let reviewsColumnContainer = document.querySelector('div.reviews-column__container');
let textReviewInput = document.querySelector('#text-review');
let nameInput = document.querySelector('#user-name');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let textReview = textReviewInput.value;
    let name = nameInput.value;
    let template = `
            <div class="reviews-text__container">
                <div class="reviews-text__item">
                    <div class="reviews-text__text">${textReview}</div>
                    <div class="reviews-text__author">${name}</div>   
                </div>
            </div>`;
    reviewsColumnContainer.innerHTML += template;
    console.log()
    closeForm();
});

function closeForm(){
    let reviewForm = document.querySelector('.review-form');
    let reviewFormBackground = document.querySelector('.review-form-background');
    reviewFormBackground.classList.remove('active');
    reviewForm.classList.remove('active');
}



// var articleDiv = document.querySelector("div.article");
// // создаем элемент
// var elem = document.createElement("h2");
// // создаем для него текст
// var elemText = document.createTextNode("Привет мир");
// // добавляем текст в элемент в качестве дочернего элемента
// elem.appendChild(elemText);
// // добавляем элемент в блок div
// articleDiv.appendChild(elem);