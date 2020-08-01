let editButton = document.querySelector(".profile__edit-button");
let popup = document.querySelector(".popup");
let closeButton = document.querySelector(".popup__close-button");
let job = document.querySelector(".profile__hobby");
let name = document.querySelector(".profile__name");
let nameInput = document.querySelector(".popup__form_name");
let jobInput = document.querySelector(".popup__form_hobby");
let saveButton = document.querySelector(".popup__save-button");
let formEdit = document.querySelector(".popup__window");
function popupOpen(){
    popup.classList.add("popup_opened");
    jobInput.value = job.textContent;
    nameInput.value = name.textContent;
}
function popupClose(){
    popup.classList.remove("popup_opened");
}
function editInfo(evt){
    evt.preventDefault();
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
    popupClose();
}
editButton.addEventListener("click", popupOpen);
closeButton.addEventListener("click", popupClose);
formEdit.addEventListener("submit", editInfo);


