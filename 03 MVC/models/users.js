import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

class UserModel {
    constructor() {
        this.dataFilePath = path.join(__dirname, '..', 'data', 'usernames.json');
        this.usernames = this.loadUsersFromFile();
    }

    loadUsersFromFile() {
        try {
            const data = fs.readFileSync(this.dataFilePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    saveUsersToFile() {
        fs.writeFileSync(this.dataFilePath, JSON.stringify(this.usernames, null, 2));
    }

    addUser(name) {
        this.usernames.push(name);
        this.saveUsersToFile();
    }

    getAllUsers() {
        return this.usernames;
    }
}

export default new UserModel();