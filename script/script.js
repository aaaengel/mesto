import {Card} from "./Card.js";
import {config} from "./config.js";
import {FormValidation} from "./validate.js";
import {editButton, job, name, nameInput, jobInput, formEdit, cards, addButton, popupEdit, popupMesto, closeButtonEdit, closeButtonMesto, popupImage, closeButtonImage, saveButtonMesto, popupOverlayEdit, popupOverlayMesto, popupOverlayImage, link, mesto} from "./constants.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {Section} from "./Section.js";
import {UserInfo} from "./UserInfo.js";
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
const userInfo = new UserInfo({userName: ".profile__name", userPrivateInfo: ".profile__hobby"});
const cardList = new Section({initialCards, renderer: (item) =>{
const card = new Card({data: {
  name: nameInput.value,
  link: linkInput.value
}
}, ".card-template")
const cardElement = card.generateCard();
cardList.setItem(cardElement);
}, cards})
cardList.renderItems()
const formValidatorEdit = new FormValidation(config.formSelectorEdit, config);
formValidatorEdit.enableValidation();
const formValidatorMesto = new FormValidation(config.formSelectorMesto, config);
formValidatorMesto.enableValidation();



