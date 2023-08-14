import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url'; 

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename); 

const dataFilePath = path.join(__dirname, '..', 'data', 'usernames.json');

class UserModel {
    constructor(callback) {
        this.usernames = [];
        this.loadUsersFromFile(callback);
    }

    loadUsersFromFile(callback) {
        fs.readFile(dataFilePath, 'utf-8', (err, data) => {
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
        fs.writeFile(dataFilePath, JSON.stringify(this.usernames, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file:', err);
            }
        });
    }

    addUser(name) {
        this.usernames.push({ id: Math.floor(Math.random()* 100000).toString() , name });
        this.saveUsersToFile();
    }

    getAllUsers() {
        return this.usernames;
    }

    getSingleUser(id) {
        return this.usernames.find(username => username.id === id) || null;
    }
}

export default new UserModel((usernames) => {
    console.log("Usernames loaded:", usernames);
});