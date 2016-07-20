var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/dog', function(req,res,next){
  console.log('dog');
  res.send('Dog went bark');
})

module.exports = router;
