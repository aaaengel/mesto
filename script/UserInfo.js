
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
setUserInfo(data){
    this._userName.textContent = data.popupName;
    this._info.textContent = data.popupJob;
}
}