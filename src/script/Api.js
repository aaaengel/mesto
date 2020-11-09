export class Api {
constructor(url){
this._url = url;
this._token = "abc35fe1-b80b-4747-9d9f-796fef32537e";
}
getAny(item){
    return fetch(this._url + item, {
        method: "GET",
        headers: {
            authorization: this._token,
            "Content-type": "application/json"
        }
    }).then((res) => {
            if(res.ok) {
             return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        })
        .then(res => console.log(res))
        .catch((err) => {
        console.log(err)
    })
}

}