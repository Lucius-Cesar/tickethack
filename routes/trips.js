var moment = require('moment');
var express = require('express');
var router = express.Router();
const Trip = require('../models/trips')



router.get('/all',(req,res)=>{
    Trip.find().then(data=>{
        res.json({allTrips : data})
    })
    
});

router.get('/:departure/:arrival/:date',(req,res)=>{
    Trip.find({
        departure : new RegExp(req.params.departure,'i'),
        arrival : new RegExp (req.params.arrival,'i'), 
        date :{
            $gte: moment(req.params.date).startOf('day'), 
            $lt: moment(req.params.date).endOf('day')
        }})
        .then(data=>{
        res.json({trip : data})
    })
});

module.exports = router;

