import mongoose from 'mongoose';
//import user from '../models/user';

const resultSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    match_id: {type : String, required:true},
    comp_id: {type : String, required:true},
    no_of_goals: Number,
    no_of_corner: {type : Number, optional:true},
    no_of_yellowcards: {type : Number, optional:true},
    no_of_fouls_committed: {type : Number, optional:true},
    scoreline: {type : String, required:true},
    scorers:{type : Number, required:true},
    user: {type: mongoose.Schema.Types.ObjectId,ref:'User', required: true},
});

export default mongoose.model('Result', resultSchema);