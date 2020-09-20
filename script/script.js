const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const job = document.querySelector(".profile__hobby");
const name = document.querySelector(".profile__name");
const nameInput = document.querySelector(".popup__form_name");
const jobInput = document.querySelector(".popup__form_hobby");
const saveButton = document.querySelector(".popup__save-button");
const formEdit = document.querySelector(".popup__window");
const cards = document.querySelector(".cards");
const addButton = document.querySelector(".profile__add-button");
const popupEdit = document.querySelector(".popup_edit");
const popupMesto = document.querySelector(".popup_mesto");
const closeButtonEdit = document.querySelector(".popup__close-button_edit");
const closeButtonMesto = document.querySelector(".popup__close-button_mesto");
const popupImage = document.querySelector(".popup_image");
const imageCaption = document.querySelector(".popup__caption_image");
const popupImageImage = document.querySelector(".popup__image_image");
const closeButtonImage = document.querySelector(".popup__close-button_image");
const saveButtonMesto = document.querySelector(".popup__save-button_mesto");
const popupForm = document.querySelector(".popup__form");
const popupOverlayEdit = document.querySelector(".popup__overlay-edit")
const popupOverlayMesto = document.querySelector(".popup__overlay-mesto");
const popupOverlayImage = document.querySelector(".popup__overlay-image");
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
function renderInitialCards(name, link){
    const cardTemplate = document.querySelector(".card-template").content;
    const cardElement = cardTemplate.cloneNode(true);
    const card = cardElement.querySelector(".card");
    card.querySelector(".card__image").src = link;
    card.querySelector(".card__text").textContent = name;
    const cardImage = card.querySelector(".card__image");
    const likeImage = card.querySelector(".card__like-image");
    const cardLikeButton = card.querySelector(".card__like-button");
    const deleteButton = card.querySelector(".card__delete-button");
    cards.appendChild(cardElement);
    function deleteCard(evt){   
        cards.removeChild(card);
    }
    cardImage.addEventListener("click", function(){
        popupImage.classList.add("popup_opened");
        popupImageImage.src = link;
        imageCaption.textContent = name;
    })
    cardLikeButton.addEventListener("click", function(){
        likeImage.classList.toggle("card__like-icon_active");
    })
    deleteButton.addEventListener("click", deleteCard);
};
function addInitialCards(){
    for(let i=0; i < initialCards.length; i++){
        const array = initialCards[i];
        const name = array.name;    
        const link = array.link;
        renderInitialCards(name, link);
    }
}
addInitialCards();

function popupEditOpen(){
    popupEdit.classList.add("popup_opened");
    jobInput.value = job.textContent;
    nameInput.value = name.textContent;
}
function popupMestoOpen(){
    popupMesto.classList.add("popup_opened");
    jobInput.value = job.textContent;
    nameInput.value = name.textContent;
}
let form = document.querySelector(".popup__new-card");
function addUserCard(evt){
    evt.preventDefault();
        const name = form.name.value;
        const link = form.link.value;
        renderInitialCards(name, link);
        popupCloseMesto();
}
function popupImageClose(){
    popupImage.classList.remove("popup_opened");
}
function popupCloseMesto(){
    popupMesto.classList.remove("popup_opened");
}
function popupCloseEdit(){
    popupEdit.classList.remove("popup_opened");
}
function editInfo(evt){
    evt.preventDefault();
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
    popupCloseEdit();
}
popupOverlayImage.addEventListener("click", popupImageClose);
popupOverlayEdit.addEventListener("click", popupCloseEdit); 
popupOverlayMesto.addEventListener("click", popupCloseMesto);
//------------------------------------------------------------------------------Validation-----------------------------------------------------------------------------------------------------------------------

function showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add("form__input_type_error");
    errorElement.textContent = errorMessage;
}
function hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove("form__input_type_error");
    errorElement.textContent = '';
}
const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
      } else {
      hideInputError(formElement, inputElement);
    }
  };
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__form'));
    console.log(inputList);
    const buttonElement = formElement.querySelector('.popup__save-button');
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  function toggleButtonState(inputList, buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save-button_inactive');
  } else {
    buttonElement.classList.remove('popup__save-button_inactive');
  }
  }
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__window'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));
  
  fieldsetList.forEach((fieldSet) => {
    setEventListeners(fieldSet);
  });
    });
  };
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
}
enableValidation();
popupMesto.addEventListener("submit", addUserCard);
addButton.addEventListener("click", popupMestoOpen);
editButton.addEventListener("click", popupEditOpen);
closeButtonEdit.addEventListener("click", popupCloseEdit);
closeButtonMesto.addEventListener("click", popupCloseMesto);
formEdit.addEventListener("submit", editInfo);
closeButtonImage.addEventListener("click", popupImageClose);




