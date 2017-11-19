import request from 'superagent'

var requestUrl = 'http://localhost:3000/boats'

//example of an api request function on client side

export function getBoats(callback) {
  request
    .get(requestUrl)
    .end((err, res) => {
      if (err) callback(err)
      else callback(null, res.body)
    })
}
