import path from 'path';
import { fileURLToPath } from 'url'; 
import UserModel from '../models/users.js';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const postUser = (req, res) => {
    UserModel.addUser(req.body.name);
    const usernames = UserModel.getAllUsers();
    res.render(path.join(__dirname, '..', 'views', 'users.ejs'), { pageTitle: 'Username Result', usernames });
};

const getUser = (req, res) => {
    const userId = req.params.userId;
    const username = UserModel.getSingleUser(userId);
    const userNotFound = !username;
    if (userNotFound) {
        res.status(404).render(path.join(__dirname, '..', 'views', 'error.ejs'), { pageTitle: 'Error', message: 'User not found' });
    } else {
        res.render(path.join(__dirname, '..', 'views', 'userProfile.ejs'), { pageTitle: 'User Profile', username });
    }
};

const getUsernames = (req, res) => {
    let searchQuery = req.query.username || '';
    let filteredUsernames = UserModel.getAllUsers();

    if (searchQuery) {
        filteredUsernames = filteredUsernames.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    res.render(path.join(__dirname, '..', 'views', 'users.ejs'), { pageTitle: 'Username Result', usernames: filteredUsernames });
};

const usersController = { postUser, getUser,getUsernames };

export default usersController;