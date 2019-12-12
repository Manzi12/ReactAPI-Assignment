import mongoose from 'mongoose';

const resultSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    match_id: String,
    comp_id: String,
    no_of_goals: Number,
    no_of_corner: Number,
    no_of_yellowcards: Number,
    no_of_fouls_committed: Number,
    scoreline: String,
    scorers:Array
});

export default mongoose.model('Result', resultSchema);