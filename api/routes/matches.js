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


// get Match by id
router.get("/:matchId", (req,res) => {
    const id = req.params.matchId;
    Match.findById(id)
    .exec()
    .then(document => {
        console.log("Documents already in the database",document);
        if(document){
            res.status(200).json(document);
        }else{
            res.status(404).json({
                message : "No valid entry for the ID provided"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
});


//updating the details of the match

router.patch("/:matchId", (req,res) => {
    const id = req.params.matchId;
    const updateFunction = {};
    for (const doc of req.body){
        updateFunction[doc.propertyName] = doc.value;
    }
    Match.update({_id:id}, {$set:updateFunction})
        .exec()
        .then(document => {
            console.log(document);
            res.status(200).json(document);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error:err
            });
        });
    });


//delete a match

router.delete("/:matchId", (req,res) => {
    const id = req.params.matchId;
    Match.remove({_id:id})
    .exec()
    .then(document => {
        res.status(200).json(document);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});




export default router;

