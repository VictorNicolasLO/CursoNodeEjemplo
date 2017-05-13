var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/:user?', function(req, res, next) {
  console.log(req.params.user);
  res.render('index', { title: req.params.user });
});*/

router.get("/", (req,res,next) => {
  res.render("index");
});

module.exports = router;
