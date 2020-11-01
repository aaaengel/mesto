import {Card} from "./Card.js";
import "../pages/index.css";
import {config} from "./config.js";
import {FormValidation} from "./validate.js";
import { nameInput, jobInput, popupEdit, popupMesto, closeButtonEdit, closeButtonMesto, popupImage, closeButtonImage, popupOverlayEdit, popupOverlayMesto, popupOverlayImage, link, mesto} from "./constants.js";
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
const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo({userName: ".profile__name", userPrivateInfo: ".profile__hobby"});
const cardList = new Section({items: initialCards, renderer: (item) => {
const card = new Card({data: item, templateSelector: ".card-template", handleCardClick: () =>{
    popupWithImage.open(item.name, item.link);
}})
const cardElement = card.generateCard();
cardList.addItem(cardElement)
}}, ".cards")
const popupWithFormEdit = new PopupWithForm ({
    popupSelector: popupEdit,
    submitForm: () => {
        userInfo.setUserInfo({popupName: nameInput.value, popupJob: jobInput.value});
        popupWithFormEdit.close();
    }
});
const popupWithFormMesto = new PopupWithForm({popupSelector: popupMesto, submitForm: () =>{
    const card = new Card({
        data: {
        name: mesto.value,
        link: link.value
    },
    templateSelector: '.card-template',
        handleCardClick: (name, link) => {
            popupWithImage.open(name, link);
        }
    })
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    popupWithFormMesto.close();
 }
})
cardList.renderItems()
const formValidatorEdit = new FormValidation(config.formSelectorEdit, config);
formValidatorEdit.enableValidation();
const formValidatorMesto = new FormValidation(config.formSelectorMesto, config);
formValidatorMesto.enableValidation();
function handleEditFormOpen () {
    const userObject =  userInfo.getUserInfo();
    nameInput.value = userObject.userName;
    jobInput.value = userObject.userPrivateInfo;
    formValidatorEdit.enableValidation();
    popupWithFormEdit.open();
    formValidatorEdit.hideInputError(nameInput);
    formValidatorEdit.hideInputError(jobInput);
}
document.querySelector('.profile__edit-button').addEventListener('click', handleEditFormOpen);
closeButtonEdit.addEventListener("click", function(){
    popupWithFormEdit.close();
})
popupOverlayEdit.addEventListener("click", function(evt){
    if(evt.target === popupOverlayEdit){
        popupWithFormEdit.close()
    }
})
function handleMestoFormOpen() {
    formValidatorMesto.enableValidation()
    popupWithFormMesto.open();
    formValidatorMesto.hideInputError(mesto);
    formValidatorMesto.hideInputError(link);
}
document.querySelector('.profile__add-button').addEventListener('click', handleMestoFormOpen);
closeButtonMesto.addEventListener("click", function(){
    popupWithFormMesto.close();
    formValidatorMesto.hideInputError(mesto);
    formValidatorMesto.hideInputError(link);
})
closeButtonImage.addEventListener("click", function(){
    popupWithImage.close();
})
popupOverlayMesto.addEventListener("click", function(evt){
    if(evt.target === popupOverlayMesto){
        popupWithFormMesto.close()
    }
})
popupOverlayImage.addEventListener("click", function(evt){
    if(evt.target === popupOverlayImage){
        popupWithImage.close()
    }
})






