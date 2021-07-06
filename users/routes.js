var express = require('express');
var router = express.Router();
var userService = require('./service');

router.get('/', async function(req, res, next) {

  let users = await userService.fetchAllUsers();
  res.json(users);
  
});


router.post('/', function(req, res, next) {

  userService.addUser(
    {
      username: 'gdiazs ' + Math.random(),
      password: new Date().getMilliseconds() + ''
    }
  );

  res.json({
    status: "success",
    statusCode: 200
  });
  
});

module.exports = router;
