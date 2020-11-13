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
            return res.json();
      })
        .catch((err) => {
        console.log(err)
    })
}


patch(item, data){
    return fetch(this._url + item, {
  method: 'PATCH',
  headers: {
    authorization: this._token,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: data.popupName,
    about: data.popupJob
  })
}).then((res) => {
    return res.json();
})
.catch((err) => {
console.log(err)
})
}


post(item, data){
  return fetch(this._url + item, {
    method: "POST",
    headers: {
      authorization: this._token,
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  }).then((res) => {
    return res.json()
    })
    .catch((err) => {
      console.log(err)
      })
  }
  
  
  delete(item, cardId){
    return fetch(this._url + item + cardId, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch((err) => {
      console.log(err)
  })
  }
  put(item, cardId){
    return fetch(this._url + item + cardId, {
      method: "PUT",
      headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if(res.ok) {
          return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
  })
  .catch((err) => {
      console.log(err)
  })
  }
}