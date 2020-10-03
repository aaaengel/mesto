//------------------------------------------------------------------------------Validation-----------------------------------------------------------------------------------------------------------------------
const config = {
    inputSelector: '.form__input',
    formSelector: '.popup__window',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_inactive',
    inputErrorClass: 'form__input_type_error',
    formSet: ".form__set"
  };
  function showInputError(formElement, inputElement, errorMessage){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
  }
  function hideInputError(formElement, inputElement){
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
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
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    console.log(inputList);
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
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
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
  }
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
    const fieldsetList = Array.from(formElement.querySelectorAll(config.formSet));
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
  enableValidation(config); 
  
  popupMesto.addEventListener("submit", addUserCard);
  addButton.addEventListener("click", function(){
    popupOpen(popupMesto);
    link.value = "";
    mesto.value = "";
    buttonElement.classList.add(config.inactiveButtonClass);
  });
  editButton.addEventListener("click", function(){
    popupOpen(popupEdit);
    jobInput.value = job.textContent;
    nameInput.value = name.textContent;
  });
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
  