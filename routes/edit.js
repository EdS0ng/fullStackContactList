'use strict';

var express = require('express');
var contactModel = require('../models/dataModel');

var router = express.Router();

router.post('/', function (req, res){
  console.log(req.body);
  if (req.body.target){
    contactModel.findOne({_id: req.body.target}, function(err, contact){
      if (err){
        console.log(err);
      }else{
        console.log(contact);
        res.render('edit',{id: contact._id, name: contact.name, phone: contact.phone, email: contact.email});
      }
    });
  }else{
    var updateObj = {
    name: req.body.contactName,
    phone: req.body.telephone,
    email: req.body.email
    };
    contactModel.findOneAndUpdate({_id: req.body.id}, updateObj, function (err, contact){
      if (err){
        console.log(err);
      }else{
        console.log('contact updated');
      }
    
    });
    res.redirect('/');    
  }
});

module.exports = router;