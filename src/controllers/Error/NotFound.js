"use strict";

let server = require('../../config/server');
let error = require('../../config/error');

let json = require('../../tools/json');

/**
 * controller error - not found
 * 
 * @author : Francois Macko
 */
class NotFound {

    constructor () {

    }

    /**
     * génère la réponse renvoyée au navigateur
     * 
     * @param {*} req : object - requête reçue du navigateur
     * @param {*} res : object - réponse envoyée au navigateur
     */
    async response(req, res) {

        res.writeHead(error.code, {'content-type':server.reponse}).end(json(error.text));
    } 
}

module.exports.NotFound = NotFound;