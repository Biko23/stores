require('../models/userReg');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const UserReg = mongoose.model('users');
//const app = express();

router.get('/', async (req, res) => {
    //res.send('It works')
   res.render('index');
})

router.get('/users', async(req, res) => {
    try{
        await UserReg.find((err, users) => {
            if(err){
                console.log(err)
            }else{

                //console.log(users);  
                res.render('stafflist', {users: users});

            }

        }); 
    } catch (err){
        res.status(400).send("Unable to find items in the database");
    }
})

/*router.get('/users', async (req, res) => {
    try{
        let items = await UserRegisteration.find()
        if(req.query.gender){
            items = await UserRegisteration.find({
                gender: req.query.gender
            })
        }
        res.render('stafflist', {users: items})
    } catch (err){
        res.status(400).send("Unable to find items in the database");
    }
    //res.send('It works')
   //res.render('stafflist');
})*/
router.post('/', async(req, res) => {
    let userRegisteration = new UserReg({
        firstName: req.body.fname,
        lastName: req.body.lname,
        gender: req.body.gender,
        country: req.body.country,
        city: req.body.city,
        designation: req.body.designation,
        nin: req.body.nin,
        eid: req.body.eid
    });
    try{
        userRegisteration.save()
        res.render('reg');
        //res.send('Thanks');
    }catch(err){
        res.send('Error Dude');
        console.log(err);
    }
    //console.log(req.body, 'Data saved');
    //res.render('reg');
})




module.exports = router;