let popup = document.querySelector(".popup");
let profile = document.querySelector(".profile");
let editButton = profile.querySelector(".edit__button");
let closeButton = popup.querySelector(".close__button");
let profileInfo = document.querySelector(".profile__info");
let saveButton = document.querySelector(".save__button");
let nameInput = popup.querySelector(".popup__name");
let jobInput = popup.querySelector(".popup__hobby");
let name = profile.querySelector(".profile__name");
let job = profile.querySelector(".profile__hobby");
nameInput.value = 'Жак-ив Кусто';
jobInput.value = 'Исследователь океана';
function popupOpen(){
    popup.classList.add('popup_opened');
    popup.classList.remove('popup');
}
editButton.addEventListener('click', popupOpen);
function popupClose(){
    popup.classList.add('popup');
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', popupClose);
function  editName(){
    let nameInput = popup.querySelector(".popup__name");
    let jobInput = popup.querySelector(".popup__hobby");
    job.textContent = jobInput.value;
    name.textContent = nameInput.value;
}
saveButton.addEventListener('click', editName);


