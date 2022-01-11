const mongoose = require('mongoose');
const schema = mongoose.Schema;
const  vschema = new schema({
    Voter_name : String,
    Age: Number,
    Voter_ID : String,
    District: String
});

Voter = mongoose.model('Voters', vschema);
module.exports = Voter;