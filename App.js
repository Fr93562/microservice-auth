"use strict";

let http = require('http');
let paramServer = require('./src/config/server');
let toolsRouter = require('./src/tools/Router');

let router = new toolsRouter.Router();

/**
 * Initialise le serveur web
 * 
 * @author : François Macko
 */
class App {

    config = {
        server : paramServer
    };

    constructor() {}

    /**
     * lance le serveur web
     */
    launch() {

        let server = http.createServer(function(req, res) {

             router.dispatch(req, res);

          });
          server.listen(this.config.server.port);
    }
}

let microsevice = new App();
microsevice.launch();