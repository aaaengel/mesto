import { Card } from "./Card.js";
import {Popup} from "./Popup.js";
export class PopupConfirm extends Popup{
constructor(popupSelector){
super(popupSelector);
this._popupConfirmButton = this._popup.querySelector('.popup__save-button')
}
open(cardId, item, api) {
    this._cardId = cardId;
    this._popupConfirmButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    api.delete("cards/", this._cardId)
    .then(() => {
        item.remove()
    })
    .finally(() => {
        this.close()
        })
    })
    super.open()
}

close() {
    super.close();
}
}