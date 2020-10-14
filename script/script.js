const editButton = document.querySelector(".profile__edit-button");
const job = document.querySelector(".profile__hobby");
const name = document.querySelector(".profile__name");
const nameInput = document.querySelector(".form__input_name");
const jobInput = document.querySelector(".form__input_hobby");
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
class Card{
  constructor(data, templateSelector){
    this._link = data.link;
    this._title = data.title;
    this._templateSelector = templateSelector;
  }
  _getTemplate(){
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".card")
    .cloneNode(true);
    return cardElement;
  }
  generateCard(){
    this._item = this._getTemplate();
    this._item.querySelector("card__image").src = this._link;
    this._item.querySelector("card__text").textContent = this._name;
  }
  _popupOpen(popup){
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);

}
 _popupClose(popup){
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', closeByEsc);
}

}
function addCards(name, link){
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__text").textContent = name;
    const cardImage = cardElement.querySelector(".card__image");
    const likeImage = cardElement.querySelector(".card__like-image");
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const deleteButton = cardElement.querySelector(".card__delete-button");
    cards.prepend(cardElement);
    function deleteCard(){   
      cardElement.remove();
    }
    cardImage.addEventListener("click", function(){
       popupOpen(popupImage);
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
const formNewCard = document.querySelector(".popup__new-card");
function addUserCard(evt){
    evt.preventDefault();
        const name = formNewCard.name.value;
        const link = formNewCard.link.value;
        addCards(name, link);
        popupClose(popupMesto);
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
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      popupClose(popupOpened);
  }
}




