"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify_router_1 = require("restify-router");
const routerInstance = new restify_router_1.Router();
// const Router = require('restify-router').Router,
//       routerInstance = new Router();
routerInstance.get('/users', (req, res, next) => {
    res.json({ message: 'Vai retornar os usuários' });
    return next();
});
exports.default = routerInstance;
