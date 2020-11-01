import { FormValidation } from "./validate";

export class Popup{
    constructor(popupSelector){
        this._popup = popupSelector;
        this._handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
                
            }
        }
    }
    open(){
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }
    close(){
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keyup', this._handleEscClose);
    }
    setEventListeners(){
        this._popup
        .querySelector(closeButton)
        .addEventListener("click", this.close);
    }
}