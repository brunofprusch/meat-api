import {Router} from 'restify-router';
const routerInstance = new Router();

routerInstance.get('/users', (req, res, next) => {
    res.json({message: 'Vai retornar os usuários'})
    return next()
});

export default routerInstance;