"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: '1', name: 'Iron Man', email: 'ironman@gmail.com' },
    { id: '2', name: 'Hulk', email: 'hulk@gmail.com' }
];
class User {
    static findAll() {
        return Promise.resolve(users);
    }
    static findById(id) {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id);
            let user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    }
}
exports.User = User;