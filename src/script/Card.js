import {popupImage, popupOpen} from "./config.js"
export class Card{
    constructor({data, templateSelector, handleCardClick, hadleDelete, api}){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._cardId = data._id;
        this._api = api;
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .cloneNode(true)
        .content
        .querySelector(".card")
         return cardElement;
    }
    generateCard(){
        this._item = this._getTemplate();
        this._cardImage = this._item.querySelector(".card__image");
        this._cardImage.src = this._link;
        
        this._cardImage.alt = this._name;
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
          this._cardElement = evt.target.parentElement;
          this._handleBasketClick(this._cardId, this._cardElement, this._api);
        });
        this._item.querySelector(".card__image").addEventListener("click", () => {
          this._handleCardClick(this._name, this._link);
        })
      }
}
