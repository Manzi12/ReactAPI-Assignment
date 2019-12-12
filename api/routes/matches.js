import express from 'express';
import mongoose from 'mongoose';
import Match from '../models/match';


const router = express.Router();


// get all mathces
router.get('/', (req, res) => {
    Match.find()
    .exec()
    .then(documents => {
        console.log(documents);
        res.status(200).json(documents)
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
})

//add a match
router.post("/",(req,res) => {
    const match = new Match({
        _id : new mongoose.Types.ObjectId(),
        match_id : req.body.match_id,
        comp_id : req.body.comp_id,
        referee_id : req.body.referee_id,
        opponents : req.body.opponents,
        venue : req.body.venue,
        time : req.body.time,
        date : req.body.date
    })
match
.save()
.then(document =>{
    console.log(document);
    res.status(201).json({
        message : "Handling Post Request to /Matches",
        createdMatch : document
    });
})
.catch(err =>{
    console.log(err);
    res.status(500).json({
        error : err
    });
});

});




export default router;

