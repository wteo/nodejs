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

const usersController = { postUser };

export default usersController;