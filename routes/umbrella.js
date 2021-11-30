var express = require('express');
const umbrella_controlers= require('../controllers/umbrella');
var router = express.Router();

/* GET umbrella */
router.get('/', umbrella_controlers.umbrella_view_all_Page); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('umbrella', { title: 'Search Results umbrella' });
});

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}

/* GET create umbrella page */ 
router.get('/create',secured, umbrella_controlers.umbrella_create_Page);

/* GET update umbrella page */ 
router.get('/update',secured, umbrella_controlers.umbrella_update_Page);

/* GET delete umbrella page */ 
router.get('/delete',secured, umbrella_controlers.umbrella_delete_Page);

module.exports = router;