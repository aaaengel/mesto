import {popupImage, popupOpen} from "./config.js"
export class Card{
    constructor({data, templateSelector, handleCardClick}){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
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
        const _item = this._item.querySelector(".card__image");
        _item.src = this._link;
        _item.alt = this._name;
        this._item.querySelector(".card__text").textContent = this._name;
        this._setEventListeners();
        return this._item;
    }
    _cardDelete() {
        this._item.remove();
        this._item = null;
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
          const popupImageImage = document.querySelector(".popup__image_image");
          popupImageImage.src = this._link;
          popupImageImage.alt = this._name;
          document.querySelector(".popup__caption_image").textContent = this._name;
        }); 
    }
}
