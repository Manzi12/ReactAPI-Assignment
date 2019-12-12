import should from 'should';
import resultModel from '../../api/models/result';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

describe('resultModelTests', () => {

    let result = {};
    //create a post with random user id before each test
    beforeEach(() => {
        const id = mongoose.Types.ObjectId().toString(); //generates pseudo random ObjectID 
        result = {
            user : id,
            match_id: {type : String, required:true},
            comp_id: {type : String, required:true},
            no_of_goals: Number,
            no_of_corner: {type : Number, optional:true},
            no_of_yellowcards: {type : Number, optional:true},
            no_of_fouls_committed: {type : Number, optional:true},
            scoreline: {type : String, required:true},
            scorers:{type : Number, required:true}
        };
    });

    it('should validate a result with a user', (done) => {
        const m = new resultModel(result);
        m.validate((err) => {
            should.not.exist(err);
            m.user.should.equal(result.user);
            m.match_id.should.equal(result.match_id);
            m.comp_id.should.equal(result.comp_id);
            m.no_of_goals.should.equal(result.no_of_goals);
            m.no_of_yellowcards.should.equal(result.no_of_yellowcards);
            m.no_of_fouls_committed.should.equal(result.no_of_fouls_committed);
            m.scoreline.should.equal(result.scoreline);
            m.scorers.should.equal(scorers);
            done();
        });
    });
});