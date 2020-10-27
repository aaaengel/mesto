import {Popup} from "./Popup.js";
export  class PopupWithForm extends Popup{
constructor({popupSelector, submitForm}){
super(popupSelector);
this._submitForm = submitForm;
this._formElement = this._popupSelector.querySelector('.popup__form');
}
_getInputValues(){
    this._inputValues = {};
    this._inputList = Array(this._popup.querySelector(".form__input"))
    this._inputList.forEach((item) => {
        this._inputValues[item.name] = inputElement.value;
    })
}
setEventListeners(){
    this._formElement.addEventListener("submit", (evt) =>{
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    })
}
close() {
    super.close();
    this._inputList.forEach((input) => {
        input.textContent = "";
    })
}
open() {
    this._setEventListeners();
    super.open();
}
}