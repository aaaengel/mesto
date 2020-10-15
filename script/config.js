export const popupImage = document.querySelector(".popup_image");
export const popupOpen = function popupOpen(popup){
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEsc);
}
export const closeByEsc = function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_opened');
        popupClose(popupOpened);
    }
  }
  export const popupClose = function popupClose(popup){
    popup.classList.remove("popup_opened");
    document.removeEventListener('keyup', closeByEsc);
}
export const config = {
    inputSelector: '.form__input',
    formSelectorEdit: '.popup__window_edit',
    formSelectorMesto: '.popup__window_mesto', 
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'form__input_type_error',
    formSet: ".form__set"
  };