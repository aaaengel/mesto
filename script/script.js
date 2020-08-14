let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let job = document.querySelector(".profile__hobby");
let name = document.querySelector(".profile__name");
let nameInput = document.querySelector(".popup__form_name");
let jobInput = document.querySelector(".popup__form_hobby");
let saveButton = document.querySelector(".popup__save-button");
let formEdit = document.querySelector(".popup__window");
let cards = document.querySelector(".cards");
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
function renderCard(){
    /*У тебя внутри функции есть две переменных, которые функция должна принять снаружи - name и link.
    поэтому, ты должен задать их как аргументы функции в круглых скобках, после объявления
    имени функции. Добавь эти переменные.
    */
    const card = document.createElement("div");
    card.classList.add("card");
    const cardImage = document.createElement("img");
    cardImage.classList.add("card__image");
    const cardDescription = document.createElement("div");
    cardDescription.classList.add("card__description");
    const cardText = document.createElement("h3");
    cardText.classList.add("card__text");
    const cardLikeButton = document.createElement("button");
    cardLikeButton.classList.add("card__like-button");
    cardLikeButton.setAttribute("type", "button");
    const likeImage = document.createElement("img");
    likeImage.setAttribute("src", "./images/Vector.svg");
    likeImage.setAttribute("alt", "сердечко");
    cardText.textContent = name;
    cardImage.setAttribute('src', `${link}`);
    /* Ты передаешь в метод appendChild строки (они в кавычках), а должен передавать переменные, который ты создал выше.
  Метод appendChild принимает node-элемент, который добавится дочерним к другому node-элементу */
    cards.appendChild("card");
    card.appendChild("cardImage");
    card.appendChild("cardDescription");
    cardDescription.appendChild("cardText");
    cardDescription.appendChild("cardLikeButton");
    cardLikeButton.appendChild("likeImage");
};
function addCard(){
    for(let i=0; i < initialCards.length; i++){
        const array = initialCards[i];
        const name = array.name;
        const link = array.link;
        /* А здесь ты передаешь эти переменные в функцию, чтобы функция могла уже с ними работать */
        renderCard();
    }
}
addCard();
function popupOpen(){
    popup.classList.add("popup_opened");
    jobInput.value = job.textContent;
    nameInput.value = name.textContent;
}
function popupClose(){
    popup.classList.remove("popup_opened");
}
function editInfo(evt){
    evt.preventDefault();
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
    popupClose();
}
editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
formEdit.addEventListener("submit", editInfo);


