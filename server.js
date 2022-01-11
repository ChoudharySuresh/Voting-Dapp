const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const urlencoder = bodyparser.urlencoded({extended :false});
const mongoose = require('mongoose');
const Voter = require('./models/Voters');
mongoose.connect('mongodb://localhost/VoterDatabase',{useNewUrlParser: true}, {useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', error=> console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));
app.set('view engine','ejs');
app.use('/assests', express.static('assests'));
app.use('/build',express.static('build'));
app.get('/', function(req, res){
    res.render('index', {user:false});
});

app.get('/instruction',function(req,res){
    res.render('instruction');
})
app.get('/castVote', function(req,res)
{
    res.render('Cate-Vote.ejs');
})


var ret;
// async function getVoters(req, res, next){
// await Voter.find({}, function(err, docs){
//     if(err){
//         console.log(err);
//     }
//     else
//     ret = docs;
// });
// next();
// };
app.post('/verify',urlencoder,async (req,res) =>
{
    console.log(req.body.name);
Voter.find({Voter_name : req.body.name, Voer_ID: req.body.id},  (err, docs)=>{
   if(err)
    {
        console.log(err);
    }
    else{
        console.log(docs);
        var data = false;

        if(docs.length==0){
            data = true;
            res.render('index',{user : data});
        }
        else
        res.redirect('/instruction');
    }
});
});
app.listen(3000);