import * as restify from 'restify';
import {environment} from '../common/environment';
import * as mongoose from 'mongoose';
import {mergePathBodyParser} from './merge-path.parser';

export class Server {

    application: restify.Server;

    initializeDb(): mongoose.MongooseThenable {
        (<any>mongoose).Promise = global.Promise
        return mongoose.connect(environment.db.url, {
            useMongoClient: true
        });
    }

    initRoutes(routers): Promise<any> {
        return new Promise((resolve, reject) => {
            try {

                this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                });

                this.application.use(restify.plugins.queryParser());
                this.application.use(restify.plugins.bodyParser());
                this.application.use(mergePathBodyParser);

                this.application.get('/hello', (req, resp, next) => {
                    resp.json({message: 'Hello', status: 'Ok'});
                    console.log('Excuting /hello route!');
                    return next();
                });

                for (let router of routers) {
                    router.applyRoutes(this.application);
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application)
                })

            } catch(error) {
                reject(error)
            }
        })
    }

    bootstrap(routers: restify.Router[] = []): Promise<Server>{
        return this.initializeDb().then(()=>
               this.initRoutes(routers).then(()=> this))
    }
}