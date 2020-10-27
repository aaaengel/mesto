import {Popup} from "./Popup.js"
export class PopupWithImage extends Popup{
    constructor(popupSelector){
        super(popupSelector);
    }
    open(name, link){
     this._popup.querySelector("popup__image_image").src = link;
     this._popup.querySelector("popup__image_image").alt = text;
     this._popup.querySelector("popup__caption_image").textContent = name;
     super.open();
 }
}