const User = require('../models/userModel.js');

function createUser(data) {
    const user = User.create(data);
    return user;
};

function getUsers(){
    const users = User.find();
    return users;
}

function getUser(id){
    const user = User.findOne({_id:id});
    return user;
}

function updateUser(id,data){
    const user = User.findOneAndUpdate(id,data,{new:true,runValidators:true});
    return user;
}

function deleteUser(id){
    const data = User.deleteOne({_id:id});
    return data;
}

function deleteAllUsers(){
    const data = User.deleteMany({});
    return data;
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
    deleteAllUsers
}