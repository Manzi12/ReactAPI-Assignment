import mongoose from 'mongoose';

const matchSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    match_id: {type:String, required :true},
    referee_id: {type:String, optional:true},
    comp_id: {type:String, required:true},
    opponents: {type: String, required : true},
    venue: {type:String, required :true},
    time: {type:String, required :true},
    date: {type:String, required :true}
});

export default mongoose.model('Match', matchSchema);