'use strict';

var express = require('express');
var contactModel = require('../models/dataModel');

var router = express.Router();


router.get('/', function (req, res) {
  res.render("add");
});

router.post('/addContact', function (req, res){
  console.log(req.body);
  
  var contact = new contactModel();
  contact.name = req.body.contactName;
  contact.phone = req.body.telephone;
  contact.email = req.body.email;

  contact.save(function (err, contact){
    if (err){
      return err;
    }else{
      console.log('contact saved');
    }
  });
  res.redirect('/');
});

module.exports = router;