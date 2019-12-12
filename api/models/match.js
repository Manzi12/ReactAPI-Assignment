import mongoose from 'mongoose';

const matchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    match_id: String,
    referee_id: String,
    comp_id: String,
    opponents: String,
    venue: String,
    time: String,
    date: String
});

export default mongoose.model('Match', matchSchema);