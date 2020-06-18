"use strict";

let http = require('http');
let paramServer = require('./src/config/server');

/**
 * Initialise le serveur web
 * 
 * @author : François Macko
 */
class App {

    config = {
        server : paramServer
    };
    tools = {};

    constructor() {}

    /**
     * instancie les différentes classes javascript nécessaires au démarrage du serveur
     */
    instantiate() {

    }

    /**
     * lance le serveur web
     */
    launch() {

        this.instantiate();

        let server = http.createServer(function(req, res) {
            res.writeHead(200);
            res.end('Salut tout le monde');

            /*
            console.log(req.url);
            console.log(req.method);
            console.log(req.headers);
            */

          });
          server.listen(this.config.server.port);
    }
}

let microsevice = new App();
microsevice.launch();