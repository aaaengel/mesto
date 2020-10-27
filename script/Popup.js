export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
    }
    open(){
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this._popup.classLIst.remove("popup_opened");
    }
    _handleEscClose(){
        if (evt.key === 'Escape') {
            const popupOpened = document.querySelector('.popup_opened');
            closePopup(popupOpened);
        }
    }
    setEventListeners(){
        this._popup
        .querySelector(closeButton)
        .addEventListener("click", this.close);
    }
}