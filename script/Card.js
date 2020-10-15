import {popupImage, popupOpen} from "./config.js"
export class Card{
    constructor(data, templateSelector){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector(".card")
        .cloneNode(true);
        return cardElement;
    }
    generateCard(){
        this._item = this._getTemplate();
        this._item.querySelector(".card__image").alt = this._name;
        this._item.querySelector(".card__image").src = this._link;
        this._item.querySelector(".card__text").textContent = this._name;
        this._setEventListeners();
        return this._item;
    }
    _cardDelete() {
        this._item.parentElement.querySelector(".card__delete-button").closest(".card");
        this._item.remove();
      }
    _like(){
        this._item.querySelector(".card__like-button").classList.toggle("card__like-icon_active");
    } 
    _setEventListeners() {
        this._item.querySelector(".card__like-button").addEventListener("click", () => {
        this._like();
        });
    
        this._item.querySelector(".card__delete-button").addEventListener("click", () => {
          this._cardDelete(); 
        });
        
        this._item.querySelector(".card__image").addEventListener("click", () => {
          popupOpen(popupImage);
          document.querySelector(".popup__image_image").src = this._link;
          document.querySelector(".popup__image_image").alt = this._name;
          document.querySelector(".popup__caption_image").textContent = this._name;
        }); 
    }
}
