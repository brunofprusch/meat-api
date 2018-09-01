"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { name: 'Iron Man', email: 'ironman@gmail.com' },
    { name: 'Hulk', email: 'hulk@gmail.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
}
exports.User = User;
