export  class UserInfo{
    constructor({userName, userPrivateInfo, api}){
        this._userName = document.querySelector(userName);
        this._info = document.querySelector(userPrivateInfo);
        this._api = api
}
getUserInfo(){
    const userInfo = {
        userName: this._userName.textContent,
        userPrivateInfo: this._info.textContent
    };
return userInfo;
}
setUserInfo(data){
    return this._api.patch("users/me", data)
}
getUserProfile() {
    console.log(this._api);
    return this._api.getAny('users/me').then(res => {
        this._userName.textContent = res.name;
        this._info.textContent =  res.about;
    })
}
}