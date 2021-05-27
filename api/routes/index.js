var express = require('express');
const { Prohairesis } = require('prohairesis');
const bodyParser = require('body-parser');
const morgan = require('morgan')

const database = new Prohairesis("mysql://b02a95136d2ffa:887aaeeb@us-cdbr-east-03.cleardb.com/heroku_aeff52ae7eb83ca?reconnect=true")

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
