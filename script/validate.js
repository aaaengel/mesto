//------------------------------------------------------------------------------Validation-----------------------------------------------------------------------------------------------------------------------
export class FormValidation{
    constructor(formSelector, config){
      this._formSelector = formSelector;
      this._config = config;
      this._inputSelector = config.inputSelector;
      this._submitButtonSelector = config.submitButtonSelector;
      this._formElement = document.querySelector(formSelector);
      this._inactiveButtonClass = config.inactiveButtonClass;
      this._inputErrorClass = config.inputErrorClass;
      this._formSet = config.formSet;
    }
    _showInputError(inputElement, errorMessage){
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
    }
    _hideInputError(inputElement){
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.textContent = '';
    }
    _checkInputValidity(inputElement){
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
        } else {
        this._hideInputError(inputElement);
      }
    };
    _setEventListeners(){
      const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      console.log(inputList);
      const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      this._toggleButtonState(inputList, buttonElement);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState(inputList, buttonElement);
        });
      });
    };
    _toggleButtonState(inputList, buttonElement){
      if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
    }
     enableValidation = () => {
      const formList = Array.from(document.querySelectorAll(this._formSelector));
      formList.forEach((formElement) => {
          formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
        });
      const fieldsetList = Array.from(this._formElement.querySelectorAll(this._formSet));
      fieldsetList.forEach((fieldSet) => {
      this._setEventListeners(fieldSet);
    });
      });
    };
     _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      });
    }
  }

  