var count = localStorage.length;
var comments = {};


let form = document.querySelector('form.review-form');
let reviewsColumnContainer = document.querySelector('div.reviews-column__container');
let textReviewInput = document.querySelector('#text-review');
let nameInput = document.querySelector('#user-name');

// form.addEventListener('submit',(e) => {
//     e.preventDefault();
//     let textReview = textReviewInput.value;
//     let name = nameInput.value;
//     let template = `
//             <div class="reviews-text__container">
//                 <div class="reviews-text__item">
//                     <div class="reviews-text__text">${textReview}</div>
//                     <div class="reviews-text__author">${name}</div>   
//                 </div>
//             </div>`;
//     reviewsColumnContainer.innerHTML += template;
//     console.log()
//     closeForm();
// });


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

    comments.text = textReviewInput.value;
    count++; // 1
    comments.textId = localStorage.length + 1; // 1
    localStorage.setItem(count, comments.text);

    comments.author = nameInput.value;
    count++; // 2
    comments.authorId = localStorage.length + 2; // 2
    localStorage.setItem(count, comments.author);
    closeForm();
});



function closeForm(){
    let reviewForm = document.querySelector('.review-form');
    let reviewFormBackground = document.querySelector('.review-form-background');
    reviewFormBackground.classList.remove('active');
    reviewForm.classList.remove('active');
}




// form.addEventListener('submit',(e) => {
//     let textReviewInput = document.querySelector('#text-review');
//     let nameInput = document.querySelector('#user-name');


//     // Создание html элементов со стилями
//     var reviewsTextContainer = document.createElement("div");
//     reviewsTextContainer.setAttribute('class', 'reviews-text__container');

//     var reviewsTextItem = document.createElement("div");
//     reviewsTextItem.setAttribute('class', 'reviews-text__item');

//     var reviewsTextText = document.createElement('div')
//     reviewsTextText.setAttribute('class', 'reviews-text__text');

//     var reviewsTextAuthor = document.createElement('div')
//     reviewsTextAuthor.setAttribute('class', 'reviews-text__author');

//     reviewsTextText.innerHTML = textReviewInput.value;
//     reviewsTextAuthor.innerHTML = nameInput.value;


//     // Создание DOM иерархии
//     reviewsColumnContainer.appendChild(reviewsTextContainer);
//     reviewsTextContainer.appendChild(reviewsTextItem);
//     reviewsTextItem.appendChild(reviewsTextText);
//     reviewsTextItem.appendChild(reviewsTextAuthor);


//     comments.text = textReviewInput.value;
//     count++; // 1
//     comments.textId = localStorage.length + 1; // 1
//     localStorage.setItem(count, comments.text);


//     comments.author = nameInput.value;
//     count++; // 2
//     comments.authorId = localStorage.length + 2; // 2
//     localStorage.setItem(count, comments.author);
//     closeForm();
// });




// function createComment() {
//     let textReviewInput = document.querySelector('#text-review');
//     let nameInput = document.querySelector('#user-name');

//     // comments.text = textReviewInput.value;
//     // comments.author = nameInput.value;

//     // count++; // 1
//     // comments.textId = localStorage.length + 1; // 1
//     // count++; // 2
//     // comments.authorId = localStorage.length + 2; // 2


//     // Создание html элементов со стилями
//     var reviewsTextContainer = document.createElement("div");
//     reviewsTextContainer.setAttribute('class', 'reviews-text__container');

//     var reviewsTextItem = document.createElement("div");
//     reviewsTextItem.setAttribute('class', 'reviews-text__item');

//     var reviewsTextText = document.createElement('div')
//     reviewsTextText.setAttribute('class', 'reviews-text__text');

//     var reviewsTextAuthor = document.createElement('div')
//     reviewsTextAuthor.setAttribute('class', 'reviews-text__author');


//     // Текст комментраия и автор
//     // reviewsTextText.innerHTML = comments.text;
//     // reviewsTextAuthor.innerHTML = comments.author;

//     reviewsTextText.innerHTML = textReviewInput.value;
//     reviewsTextAuthor.innerHTML = nameInput.value;


//     // Создание DOM иерархии
//     reviewsColumnContainer.appendChild(reviewsTextContainer);
//     reviewsTextContainer.appendChild(reviewsTextItem);
//     reviewsTextItem.appendChild(reviewsTextText);
//     reviewsTextItem.appendChild(reviewsTextAuthor);


//     comments.text = textReviewInput.value;
//     count++; // 1
//     comments.textId = localStorage.length + 1; // 1
//     localStorage.setItem(count, comments.text);


//     comments.author = nameInput.value;
//     count++; // 2
//     comments.authorId = localStorage.length + 2; // 2
//     localStorage.setItem(count, comments.author);
// }




function showReviews() {

    for (var i = 0; i < localStorage.length; i += 2){
        var dynamicCommentBox = document.createElement('div');
        dynamicCommentBox.style.display = "block";

        var reviewsTextContainer = document.createElement("div");
        reviewsTextContainer.setAttribute('class', 'reviews-text__container');

        var reviewsTextItem = document.createElement("div");
        reviewsTextItem.setAttribute('class', 'reviews-text__item');

        var reviewsTextText = document.createElement('div')
        reviewsTextText.setAttribute('class', 'reviews-text__text');

        var reviewsTextAuthor = document.createElement('div')
        reviewsTextAuthor.setAttribute('class', 'reviews-text__author');

        reviewsTextText.innerHTML = localStorage.getItem(i + 1);
        reviewsTextAuthor.innerHTML = localStorage.getItem(i + 2);

        reviewsColumnContainer.appendChild(reviewsTextContainer);
        reviewsTextContainer.appendChild(reviewsTextItem);
        reviewsTextItem.appendChild(reviewsTextText);
        reviewsTextItem.appendChild(reviewsTextAuthor);
    }
}


function pageLoad() {
    showReviews();
    //localStorage.clear();
}

window.addEventListener('load', pageLoad);