import express from 'express';
import mongoose from 'mongoose';
import Result from '../models/result';
//import asyncHandler from 'express-async-handler';


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



// router.post("/",(req,res) => {
//     const newResult = req.body;
//     newResult.user = req.user._id
//     if(newResult){
//         new Result({
//                     _id : new mongoose.Types.ObjectId(),
//                     match_id : req.body.match_id,
//                     result_id:req.body.result_id,
//                     comp_id : req.body.comp_id,
//                     no_of_goals : req.body.no_of_goals,
//                     no_of_yellowcards : req.body.no_of_yellowcards,
//                     no_of_fouls_committed : req.body.no_of_fouls_committed,
//                     scoreline : req.body.scoreline,
//                     scorers : req.body.scorers
//                 })
//                 result
//                 .save()
//                 .then(document =>{
//                     console.log(document);
//                     res.status(201).json({
//                         message : "Handling Post Request to /Results",
//                         createdResult : document
//                     });
//                 })
//                 .catch(err =>{
//                     console.log(err);
//                     res.status(500).json({
//                         error : err
//                     });
//                 });
//             }
//         }
// );
        


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

router.patch("/:resultId", (req,res) => {
    const id = req.params.resultId;
    const updateFunction = {};
    for (const doc of req.body){
        updateFunction[doc.propertyName] = doc.value;
    }
    Result.update({_id:id}, {$set:updateFunction})
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

