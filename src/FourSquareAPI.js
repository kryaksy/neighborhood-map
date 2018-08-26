let api = "https://api.foursquare.com/v2/venues/explore?"

let id = "AI502HGN5GMR5RJNSWJMQSG5RPGE1QJR3OJ1RAKXXCLBUBSL"
let secret = "3F5RHAETZT5GFEL3PWUJEOQQGNHQOUZWIJYPWAQJKA0ENSC4"

api = api + 'client_id=' + id + '&client_secret=' + secret + '&v=20180323&limit=10&ll=41.0439991,28.9932452&query=coffee'

export const getAll = () =>
  fetch(api)
    .then(function (data) {
      return data.json()
    })
    .then(function (data) {
      return data.response.groups[0].items
    })