import {Popup} from "./Popup.js";
export class PopupConfirm extends Popup{
constructor(popupSelector, {submitForm}){
super(popupSelector);
this._submitForm = submitForm;
this._popupConfirmButton = this._popup.querySelector('.popup__save-button')
}
open(cardId, item, api) {
    this._popupConfirmButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    this._submitForm(cardId, item, api)
    super.open()
})
}
close() {
    super.close();
}
}