import {Card} from "./Card.js";
import "../pages/index.css";
import {config} from "./config.js";
import {FormValidation} from "./validate.js";
import { nameInput, jobInput, popupEdit, popupMesto, closeButtonEdit, closeButtonMesto, popupImage, closeButtonImage, popupOverlayEdit, popupOverlayMesto, popupOverlayImage, link, mesto, popupConfirm, popupAvatar, profileAvatar, avatarLink, closeButtonAvatar, popupAvatarOverlay, popupAvatarSaveButton} from "./constants.js";
import {PopupWithImage} from "./PopupWithImage.js";
import {PopupWithForm} from "./PopupWithForm.js";
import {Section} from "./Section.js";
import {UserInfo} from "./UserInfo.js";
import {Api} from "./Api.js"
import { PopupConfirm } from "./popupConfirm.js";
import {renderLoading} from "./utils.js"
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-17/")
const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo({userName: ".profile__name", userPrivateInfo: ".profile__hobby", api: api});
const popupWithConfirm = new PopupConfirm(popupConfirm);

//добавление карточек
    userInfo.getUserProfile().then(() => {api.getAny("cards").then((res) => {
    const cardList = new Section({items: res, renderer: (item) => {
    const card = new Card({data: item, templateSelector: ".card-template", handleCardClick: () =>{
        popupWithImage.open(item.name, item.link);
    },
    handleDelete:(cardId, item, api) => {
        popupWithConfirm.open(cardId, item, api)
        },
        api: api})
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);  
    }}, ".cards");
    cardList.renderItems();
    })})
    .catch(err => console.log(err))
//изменение имя профиля
    const popupWithFormEdit = new PopupWithForm ({
    popupSelector: popupEdit,
    submitForm: () => {
        renderLoading(document.querySelector('.popup__save-button_edit'), true, 'Сохранение...')
        userInfo.setUserInfo({popupName: nameInput.value, popupJob: jobInput.value})
        .then(res => {
            document.querySelector(".profile__name").textContent = res.name;
            document.querySelector(".profile__hobby").textContent = res.about;
        })
        .finally(() => {
            popupWithFormEdit.close()
        })
    }
    });
    //добавление карточки
     const popupWithFormMesto = new PopupWithForm({popupSelector: popupMesto, submitForm: () =>{
        renderLoading(document.querySelector('.popup__save-button_mesto'), true, 'Сохранение...')
    api.post("cards", {name: mesto.value, link: link.value}).then(res => {
        const cardList = new Section({items: [res], renderer: (item) => {
        const card = new Card({
        data: item,
        templateSelector: '.card-template',
        handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
        },
        handleDelete:(cardId, item, api) => {
            popupWithConfirm.open(cardId, item, api)
        },
        api: api})
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    popupWithFormMesto.close();
    }}, ".cards");
    cardList.renderItems();
}).catch(err => console.log(err))
}})

const popupEditAvatar = new PopupWithForm({
    popupSelector: popupAvatar,
    submitForm: () => {
        renderLoading(popupAvatarSaveButton, true, 'Сохранение...')
        userInfo.editUserAvatar('users/me/avatar', {link: avatarLink.value})
            .then(res => {
                profileAvatar.setAttribute('src', res.avatar) 
            })
            .finally(() => {
                popupEditAvatar.close()
            })
    }
})
const formValidatorEdit = new FormValidation(config.formSelectorEdit, config);
formValidatorEdit.enableValidation();
const formValidatorMesto = new FormValidation(config.formSelectorMesto, config);
formValidatorMesto.enableValidation();
const formValidatorAvatar = new FormValidation(config.formSelectorAvatar, config)
formValidatorAvatar.enableValidation();
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
function handleAvatarFormOpen(){
    popupEditAvatar.open();
    formValidatorAvatar.hideInputError(avatarLink);
    formValidatorAvatar.enableValidation();
}
profileAvatar.addEventListener("click", handleAvatarFormOpen)
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
closeButtonAvatar.addEventListener("click", function(){
    popupEditAvatar.close();
})
popupAvatarOverlay.addEventListener("click", function(evt){
    if(evt.target === popupAvatarOverlay){
        popupEditAvatar.close()
    }
})







