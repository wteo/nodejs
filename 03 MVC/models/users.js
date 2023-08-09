import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);  

class UserModel {
    constructor(callback) {
        this.dataFilePath = path.join(__dirname, '..', 'data', 'usernames.json');
        this.usernames = [];
        this.loadUsersFromFile(callback);
    }

    loadUsersFromFile(callback) {
        fs.readFile(this.dataFilePath, 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading from file:', err);
                callback([]); // Return an empty array in case of an error
            } else {
                this.usernames = JSON.parse(data);
                callback(this.usernames);
            }
        });
    }

    saveUsersToFile() {
        fs.writeFile(this.dataFilePath, JSON.stringify(this.usernames, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            }
        });
    }

    addUser(name) {
        this.usernames.push(name);
        this.saveUsersToFile();
    }

    getAllUsers() {
        return this.usernames;
    }
}

export default new UserModel((usernames) => {
    console.log("Usernames loaded:", usernames);
});