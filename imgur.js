/**
 * Created by Justin on 2016-02-08.
 */

var fetch = require('node-fetch')

function fetchImgur (searchQuery, offset) {
  // http://api.imgur.com/endpoints/gallery
  var url = 'https://api.imgur.com/3/gallery/search/time/' + offset + '?q=' + searchQuery

  return fetch(url, {
    headers: {
      Authorization: 'Client-ID ' + process.env.IMGUR_API_CLIENT_ID
    }
  }).then(function (response) {
    return response.json()
  }).then(function (results) {
    return results.data.map(function (result) {
      return {
        title: result.title,
        url: result.link
      }
    })
  })
}

module.exports = {
  fetchImgur: fetchImgur
}
