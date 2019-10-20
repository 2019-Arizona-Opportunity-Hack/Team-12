const express = require("express");
const { Person } = require("../models");
const router = express.Router();


router
    .route("/")
    .get((req, res, next) => {
        Person.find().then(person =>{
            res.send(person);
        })
      })
    .post((req,res,next) => {
        //console.log(req.body);
        return Person.create(req.body).then(person => {
            return res.redirect('/person');
        })
    });


router
    .route("/prepare/")
    .get((req, res, next) => {
        Person.find().then(person =>{
            res.send(person);
        })
      })
    .post((req,res,next)=>{
        console.log(req.body._id);
        return Person.findByIdAndUpdate(req.body._id,{
            $set:{
                needsHotel:req.body.needsHotel,
                destination:req.body.destination,
                status:req.body.status,
            },
        })
        .then(person =>{
            return res.redirect('/person');
        }).catch((e)=>{
            console.log(e);
        })
    });

    router
    .route("/cabUpdate/")
    .get((req, res, next) => {
        Person.find().then(person =>{
            res.send(person);
        })
      })
    .post((req,res,next)=>{
        console.log(req.body._id);
        return Person.findByIdAndUpdate(req.body._id,{
            $set:{
                needsCab:req.body.needsCab,
                status:req.body.status,
            },
        })
        .then(person =>{
            return res.redirect('/person');
        }).catch((e)=>{
            console.log(e);
        })
    });


module.exports = router;


/*
router
    .route("prepare/:id")
    .patch((req,res,next)=>{
        //console.log(req.params.id);
        return Person.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        })
        .then(person =>{
            return res.redirect('/person');
        }).catch((e)=>{
            console.log(e);
        })
    })
    */



