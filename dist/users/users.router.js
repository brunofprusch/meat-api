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
routerInstance.get('/users/:id', (req, res, next) => {
    // User.findById(req.params.id)
    //     .then(user => {
    //         if (user) {
    //             res.json(user);
    //             return next();
    //         }
    //         res.send(404);
    //         return next();
    //     })
    users_model_1.User.findById(req.params.id)
        .then(render(res, next));
});
routerInstance.post('/users', (req, res, next) => {
    let user = new users_model_1.User(req.body);
    user.save()
        .then(user => {
        users_model_1.User.findById(user._id)
            .then(user => {
            res.json(user);
            return next();
        });
    });
});
routerInstance.put('/users/:id', (req, res, next) => {
    users_model_1.User.findById(req.params.id)
        .then(userFound => {
        let user = new users_model_1.User(req.body);
        user._id = req.params.id;
        user.update(user)
            .then(userUpdated => {
            res.json(user);
            return next();
        });
    })
        .catch(error => {
        res.send(404);
        return next();
    });
});
routerInstance.patch('/users/:id', (req, res, next) => {
    const options = { new: true };
    users_model_1.User.findByIdAndUpdate(req.params.id, req.body, options)
        .then(user => {
        if (user) {
            res.json(user);
            return next();
        }
        res.send(404);
        return next();
    });
});
routerInstance.del('/users/:id', (req, res, next) => {
    users_model_1.User.remove({ _id: req.params.id }).exec()
        .then((cmdResult) => {
        if (cmdResult.result.n) {
            res.send(204);
        }
        else {
            res.send(404);
        }
    });
});
function render(res, next) {
    return (document) => {
        if (document) {
            res.json(document);
            return next();
        }
        res.send(404);
        return next();
    };
}
exports.default = routerInstance;
//# sourceMappingURL=users.router.js.map