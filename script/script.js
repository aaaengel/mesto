const editButton = document.querySelector(".profile__edit-button");
const job = document.querySelector(".profile__hobby");
const name = document.querySelector(".profile__name");
const nameInput = document.querySelector(".popup__form_name");
const jobInput = document.querySelector(".popup__form_hobby");
const saveButton = document.querySelector(".popup__save-button");
const formEdit = document.querySelector(".popup__window_edit");
const formMesto = document.querySelector(".popup__window_mesto");
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
const popupOverlayEdit = document.querySelector(".popup__overlay-edit")
const popupOverlayMesto = document.querySelector(".popup__overlay-mesto");
const popupOverlayImage = document.querySelector(".popup__overlay-image");
const cardTemplate = document.querySelector(".card-template").content;
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
function addCards(name, link){
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__text").textContent = name;
    const card = cardElement.querySelector(".card");  //не могу удалить card потому что не смогу вызвать функцию удаления на cardElement тк он Node а card - нет
    const cardImage = cardElement.querySelector(".card__image");
    const likeImage = cardElement.querySelector(".card__like-image");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    cards.prepend(cardElement);
    function deleteCard(){   
        cards.removeChild(card); //с cardElement.remove не получается, я не могу вызвать remove на этом элементе и удалить его...
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
        addCards(name, link);
    }
}
addInitialCards();

function popupEditOpen(){
    popupEdit.classList.add("popup_opened");
    jobInput.value = job.textContent;//<-- не могу объединить две функции тк одна отличается от другой этими строчками
    nameInput.value = name.textContent;
}
function popupMestoOpen(){
    popupMesto.classList.add("popup_opened");
}
const form = document.querySelector(".popup__new-card");
function addUserCard(evt){
    evt.preventDefault();
        const name = form.name.value;
        const link = form.link.value;
        renderInitialCards(name, link);
        popupCloseMesto();
}
function popupClose(popup){
    popup.classList.remove("popup_opened");
}
function editInfo(evt){
    evt.preventDefault();
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
    popupClose(popupEdit);
}
popupImage.addEventListener("click", function(evt){
  if(evt.target === popupOverlayImage){
    popupClose(popupImage);
  }
});
popupOverlayEdit.addEventListener("click", function(evt){
  if(evt.target === popupOverlayEdit){
    popupClose(popupEdit);
  }
}); 
popupOverlayMesto.addEventListener("click", function(evt){
  if(evt.target === popupOverlayMesto){
    popupClose(popupMesto);
  }
});
function popupOpen(){
  popup.popup.classList.add("popup_opened");
}
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
  buttonElement.setAttribute('disabled', true);
} else {
  buttonElement.classList.remove('popup__save-button_inactive');
  buttonElement.removeAttribute('disabled');
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
enableValidation(); // БЕЗ ПОНЯТИЯ КАК ИПОРТИРОВАТЬ ТАК КАК НЕ БЫЛО ТАКОЙ ТЕМЫ...

popupMesto.addEventListener("submit", addUserCard);
addButton.addEventListener("click", popupMestoOpen);
editButton.addEventListener("click", popupEditOpen);
closeButtonEdit.addEventListener("click", function(){
  popupClose(popupEdit)
});
closeButtonMesto.addEventListener("click", function(){
  popupClose(popupMesto)
});
formEdit.addEventListener("submit", editInfo);
closeButtonImage.addEventListener("click", function(){
  popupClose(popupImage)
});




