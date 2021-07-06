const userRepository = require('./repository');

const addUser = (newUser) => {
    userRepository.save(newUser);
}

const fetchAllUsers = async () => {
    let allUsers = await userRepository.findAll();
    return allUsers.map( user => { return {
        username: user.username
    }});

}

module.exports = {
    addUser,
    fetchAllUsers
}