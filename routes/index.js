var express = require('express')
var router = express.Router()
var emojione = require('emojione')
var marked = require('marked')
var Promise = require('bluebird')
var fs = require('fs')

/* GET home page. */
router.get('/', function (req, res) {
  // res.render('index', { title: 'Express' })

  // Render the README file.
  return new Promise(function (resolve, reject) {
    fs.readFile('README.md', 'utf8', function (err, data) {
      if (err) reject(err)
      resolve(data)
    })
  }).then(function (val) {
    var readme = marked(val.toString())
    // Add emojis.
    readme = emojione.shortnameToImage(readme)
    var html = '<html><head><link rel="stylesheet" href="public/index.css"/></head><body>' + readme + '</body></html>'
    res.status(200).send(html)
  })
})

module.exports = router
