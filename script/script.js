let popup = document.querySelector(".popup");
let profile = document.querySelector(".profile");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close-button");
let profileInfo = document.querySelector(".profile__info");
let saveButton = document.querySelector(".popup__save-button");
let nameInput = document.querySelector(".popup__form_name");
let jobInput = document.querySelector(".popup__form_hobby");
let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__hobby");
let popupContainer = document.querySelector(".popup__window");
function popupOpen(){
    popup.classList.add('popup_opened');
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
}
editButton.addEventListener('click', popupOpen);
function popupClose(){
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', popupClose);
function editName(){ 
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;    
    popupClose(popup);
};
saveButton.addEventListener('click', editName);


