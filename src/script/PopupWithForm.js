import {Popup} from "./Popup.js";
export  class PopupWithForm extends Popup{
constructor({popupSelector, submitForm}){
super(popupSelector);
this._submitForm = submitForm;
this._formElement = this._popup.querySelector('.popup__window');
}
_getInputValues(){
    this._inputValues = {};
    this._inputList = Array(this._popup.querySelector(".form__input"))
    this._inputList.forEach((item) => {
        this._inputValues[item.name] = item.value;
    })
    return this._inputValues;
}
setEventListeners(){
    this._formElement.addEventListener("submit", (evt) =>{
        evt.preventDefault();
        this._submitForm(this._getInputValues());
    })
}
close() {
    super.close();
    this._formElement.reset();
}
open() {
    this.setEventListeners();
    super.open();
}
}