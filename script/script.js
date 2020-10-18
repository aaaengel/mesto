import {Card} from "./Card.js";
import {config} from "./config.js"
import {FormValidation} from "./validate.js"
const editButton = document.querySelector(".profile__edit-button");
const job = document.querySelector(".profile__hobby");
const name = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_name");
const jobInput = document.querySelector(".form__input_hobby");
const formEdit = document.querySelector(".popup__window_edit");
const cards = document.querySelector(".cards");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_edit");
const popupMesto = document.querySelector(".popup_mesto");
const closeButtonEdit = document.querySelector(".popup__close-button_edit");
const closeButtonMesto = document.querySelector(".popup__close-button_mesto");
const popupImage = document.querySelector(".popup_image");
const closeButtonImage = document.querySelector(".popup__close-button_image");
const saveButtonMesto = document.querySelector(".popup__save-button_mesto");
const popupOverlayEdit = document.querySelector(".popup__overlay-edit")
const popupOverlayMesto = document.querySelector(".popup__overlay-mesto");
const popupOverlayImage = document.querySelector(".popup__overlay-image");
const link = document.querySelector(".form__input_link");
const mesto = document.querySelector(".form__input_mesto");
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
function openPopup(popup){
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);
}

function addUserCard(evt) {
  evt.preventDefault();
  const newCard = new Card({link: link.value, name: mesto.value}, ".card-template");
  const cardNewElement = newCard.generateCard();
  cards.prepend(cardNewElement);

  closePopup(popupMesto);
}
initialCards.forEach((item) => {
  const card = new Card(item, ".card-template");
  const cardElement = card.generateCard();
  cards.append(cardElement);
})
function closePopup(popup){
    popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', closeByEsc);
}
function editInfo(evt){
    evt.preventDefault();
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
    closePopup(popupEdit);
}
popupImage.addEventListener("click", function(evt){
  if(evt.target === popupOverlayImage){
    closePopup(popupImage);
  }
});
popupOverlayEdit.addEventListener("click", function(evt){
  if(evt.target === popupOverlayEdit){
    closePopup(popupEdit);
  }
}); 
popupOverlayMesto.addEventListener("click", function(evt){
  if(evt.target === popupOverlayMesto){
    closePopup(popupMesto);
  }
}); 
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      closePopup(popupOpened);
  }
}
popupMesto.addEventListener("submit", addUserCard);
addButton.addEventListener("click", function(){
  openPopup(popupMesto);
  link.value = "";
  mesto.value = "";
  saveButtonMesto.classList.add(config.inactiveButtonClass);
  saveButtonMesto.disabled = true;
});
editButton.addEventListener("click", function(){
  openPopup(popupEdit);
  jobInput.value = job.textContent;
  nameInput.value = name.textContent;
});
closeButtonEdit.addEventListener("click", function(){
  closePopup(popupEdit)
});
closeButtonMesto.addEventListener("click", function(){
  closePopup(popupMesto)
});
formEdit.addEventListener("submit", editInfo);
closeButtonImage.addEventListener("click", function(){
  closePopup(popupImage)
});
const formValidatorEdit = new FormValidation(config.formSelectorEdit, config);
formValidatorEdit.enableValidation();
const formValidatorMesto = new FormValidation(config.formSelectorMesto, config);
formValidatorMesto.enableValidation();



