const User = require('../models/userModel.js');

const createUser = (req,res) => {
    const user = User.create(req.body);
    res.json(user);
};

const  getUsers = (req,res)=> {
    const users = User.find();
    res.json(users);
}

const getUser = (req,res)=> {
    const {id} = req.params;
    const user = User.findOne({_id:id});
    res.json(user);
}

const updateUser = (req,res)=> {
    const {id} = req.params;
    const user = User.findOneAndUpdate(id,req.body,{new:true,runValidators:true});
    res.json(user);
}

const deleteUser = (req,res)=> {
    const {id} = req.params;
    const data = User.deleteOne({_id:id});
    res.json(data);
}

const deleteAllUsers = (req,res)=> {
    const data = User.deleteMany({});
    res.json(data);
}




module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteAllUsers,
    deleteUser
};