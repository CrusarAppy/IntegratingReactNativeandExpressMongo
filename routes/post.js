const express = require ('express');
const router  = express.Router() ;
const Users = require('../models/User');



// get all the posts
router.get('/' , async(req,res) => {
    try{
        const users = await Users.find();
        res.json(users);
        res.send("we are on post " );
    }catch{
        res.json({message:err});
    }
    
});

//submit the posts 
router.post('/' , async (req,res) => {
    //console.log(req.body);
    const user = new Users ({
        Fullname :  req.body.Fullname,
        Username: req.body.Username,
        Address : req.body.Address,      
        PhoneNumber :req.body.PhoneNumber,   
        Email : req.body.Email,
        Password :  req.body.Password,
        Gender: req.body.Gender,
        DOB : req.body.DOB,
        Type :req.body.Type

    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err) {
        res.json({message : err});
    }

});

// specific posts 

router.get('/:userId' , async (req,res) => {
    //console.log(req.params.postId);
    try{
        const user =  await Users.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err});

    }

})

//delete post

router.delete('/:userId' , async (req,res) => {
    //console.log(req.params.postId);
    try{
        const removeUser =  await Users.findByIdAndDelete({ _id : req.params.userId });
        res.json(removeUser);
    }catch(err){
        res.json({message: err});

    }

})

router.patch('/:userId' , async (req,res) => {
    //console.log(req.params.postId);
    try{
        const updateUser =  await Users.updateOne(
            { _id : req.params.userId },
            {$set : {Fullname : req.body.Fullname}}
            ); 
        res.json(updateUser);
    }catch(err){
        res.json({message: err});

    }

})
//     user.save()
//        .then(data => {
//             res.json(data);
//         })
//         .catch(err => {
//             res.json({message : err });
//         });
// });

module.exports = router;