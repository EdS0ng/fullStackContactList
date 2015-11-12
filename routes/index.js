'use strict';

var express = require('express');
var router = express.Router();
var contactModel = require('../models/dataModel');


router.get('/', function(req, res) {
  contactModel.find({}, function(err, contacts){
    if (err){
      console.log(err);
    }else{
      console.log(contacts);
      res.render("index", {contacts: contacts});
    }
  });
});

router.post('/remove:id', function (req, res){
  contactModel.findByIdAndRemove( req.params.id, function (err,data){
    if (err) {
      return console.log(err)
    }
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
