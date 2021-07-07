const User = require('./user');


const save = (user) => {
    var newUser = new User({
        username: user.username,
        password: user.password
    });

    newUser.save();
}

const findAll = () => {
    return User.find();
}

module.exports = {
    findAll, 
    save
}