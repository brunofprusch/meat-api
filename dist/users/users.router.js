"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_router_1 = require("restify-router");
const routerInstance = new restify_router_1.Router();
const users_model_1 = require("./users.model");
routerInstance.get('/users', (req, res, next) => {
    users_model_1.User.find()
        .then(users => {
        res.json(users);
        return next();
    });
});
routerInstance.get('users/:id', (req, res, next) => {
    users_model_1.User.findById(req.params.id)
        .then(user => {
        if (user) {
            res.json(user);
            return next();
        }
        res.send(404);
        return next();
    });
});
exports.default = routerInstance;
