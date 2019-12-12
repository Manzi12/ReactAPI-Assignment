import express from 'express';
import mongoose from 'mongoose';
import Result from '../models/result';


const router = express.Router();


// get all results
router.get('/', (req, res) => {
    Result.find()
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

//add a result
router.post("/",(req,res) => {
    const result = new Result({
        _id : new mongoose.Types.ObjectId(),
        match_id : req.body.match_id,
        result_id:req.body.result_id,
        comp_id : req.body.comp_id,
        no_of_goals : req.body.no_of_goals,
        no_of_yellowcards : req.body.no_of_yellowcards,
        no_of_fouls_committed : req.body.no_of_fouls_committed,
        scoreline : req.body.scoreline,
        scorers : req.body.scorers
    })
    result
    .save()
    .then(document =>{
        console.log(document);
        res.status(201).json({
            message : "Handling Post Request to /Results",
            createdResult : document
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error : err
        });
    });

});


// get Result by id
router.get("/:resultId", (req,res) => {
    const id = req.params.resultId;
    Result.findById(id)
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


//updating the details of the result

router.put("/:resultId", (req,res) => {
    const id = req.params.resultId;
    Result.update({_id:id}, {$set : {
        match_id : req.body.newMatchId,
        result_id: req.body.newResultId,
        comp_id: req.body.newCompId,
        no_of_goals: req.body.newNoOfGoals,
        no_of_corner: req.body.newNoOfCorners,
        no_of_yellowcards: req.body.newNoOfYellowcards,
        no_of_fouls_committed: req.body.newNoOfFoulsCommitted,
        scoreline: req.body.newScoreline,
        scorers: req.body.newScorers
    }})
})


//delete a result

router.delete("/:resultId", (req,res) => {
    const id = req.params.resultId;
    Result.remove({_id:id})
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

