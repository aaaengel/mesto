export class Card{
    constructor({data, templateSelector, handleCardClick, handleDelete, api, myId}){
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._cardId = data._id;
        this._api = api;
        this._handleDelete = handleDelete;
        this._owner = data.owner._id;
        this._myId = myId;
    }
    _getTemplate(){
        const cardElement = document
        .querySelector(this._templateSelector)
        .cloneNode(true)
        .content
        .querySelector(".card")
         return cardElement;
    }
    _checkCardId(){
      return this._owner === this._myId;
    }
    generateCard(){
        this._item = this._getTemplate();
        this._cardImage = this._item.querySelector(".card__image");
        this._cardImage.src = this._link;
        
        this._cardImage.alt = this._name;
        this._item.querySelector(".card__text").textContent = this._name;
        this._setEventListeners();
        if (!this._checkCardId()) {
          this._item.querySelector('.card__delete-button').classList.add('card__delete-button_type_isHidden')
      }
        return this._item;
      }
    _cardDelete() {
        this._item.remove();
        this._item = null;
      }
    _like(evt){
      if(evt.target.classList.contains('card__like-icon_active') === false) {
        return this._api.put(`cards/likes/${this._cardId}`)
            .then(res => {
             this._toggleLike(res)
            })
    } else {
        this._api.delete(`cards/likes/${this._cardId}`)
            .then(res => {
              this._toggleLike(res)
        })  
    }
    } 
    _toggleLike(data){
      console.log(this._cardId)
      this._item.querySelector('.card__like-caption').textContent = data.likes.length;
      this._item.querySelector('.card__like-image').classList.toggle('card__like-icon_active')
    }
    _setEventListeners() {
        this._item.querySelector(".card__like-button").addEventListener("click", (evt) => {
        this._like(evt);
        });
    
        this._item.querySelector(".card__delete-button").addEventListener("click", (evt) => {
          this._cardElement = evt.target.parentElement;
          this._handleDelete(this._cardId, this._cardElement, this._api);
        });
        this._item.querySelector(".card__image").addEventListener("click", () => {
          this._handleCardClick(this._name, this._link);
        })
      }
}
