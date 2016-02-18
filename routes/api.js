var express = require('express')
var router = express.Router()
var debug = require('debug')('api')

var imgur = require('../imgur')

var _searches = []

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json({
    apiVersion: '1.0'
  })
})

router.get('/imagesearch/:search', function (req, res) {
  if (!('search' in req.params)) {
    res.status(200).send('NOT OK')
  }

  if (req.params.search === '') {
    res.status(200).send('NOT OK')
  }

  var searchQuery = req.params.search

  debug('search query = ' + searchQuery)

  var offset = 0

  if ('query' in req) {
    if ('offset' in req.query) {
      offset = req.query.offset
    }
  }

  debug('offset  = ' + offset)

  // Store the search query.
  _searches.push({ term: searchQuery, when: Date.now() })

  return imgur.fetchImgur(searchQuery, offset)
    .then(function (results) {
      res.status(200).json({
        apiVersion: '1.0',
        data: {
          count: results.length,
          results: results
        }
      })
    })
})

router.get('/latest/imagesearch', function (req, res) {
  res.status(200).json({
    apiVersion: '1.0',
    data: {
      recentSearches: _searches
    }
  })
})

module.exports = router
