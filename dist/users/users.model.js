"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
});
const User = mongoose.model('User', userSchema);
exports.User = User;
//# sourceMappingURL=users.model.js.map