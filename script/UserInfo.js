import {name, job} from "./constants.js";
export  class UserInfo{
    constructor({userName, userPrivateInfo}){
        this._userName = document.querySelector(userName);
        this._info = document.querySelector(userPrivateInfo);
}
getUserInfo(){
    const userInfo = {
        userName: this._userName.textContent,
        userPrivateInfo: this._info.textContent
    };
return userInfo;
}
setUserInfo(){
this.getUserInfo();
name.textContent = this._userInfo.userName;
job.textContent = this._userInfo.userPrivateInfo;
}
}