const path = 'http://localhost:3000/api/v1/cafes'

let headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default class CafeData {

  static createCafe(cafe) {
    return fetch(`${path}/create`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(cafe)
    })
    .then(resp => {return resp.json()})
  }

  static updateCafe(cafe) {
    return fetch(`${path}/`, {
      method: 'PATCH',
      headers: headers(),
      body: JSON.stringify(cafe)
    })
    .then(resp => {return resp.json()})
  }

  static deleteCafe(cafe) {
    return fetch(`${path}/`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify(cafe)
    })
    .then(resp => {return resp.json()})
  }

}
