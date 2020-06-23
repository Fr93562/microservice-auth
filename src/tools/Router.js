"use strict";

let paramPaths = require('../config/paths');
let paramError = require('../config/error');
let toolsFilter = require('./Filter');


/**
 * outil de gestion des routes
 * 
 * @author : Francois Macko
 */
class Router {

    tools = {
        filter : new toolsFilter.Filter()
    };
    data = {
        url : "",
        method : "",
        body : ""
    };
    paths = [];
    check = false;
    find = false;

    constructor () {

    }

    /**
     * point d'entrée de la classe
     * récupère les données et construis les routes
     * transmets la requête au controller
     * 
     * @param {*} req : objet - requête reçue
     * @param {*} res : objet - réponse envoyée
     */
    dispatch(req, res) {

        this.parser(req);

        if(this.check) {

            this.build();

            this.paths.forEach(path => {
   
                if (this.data.url === path.target.path && this.data.method === path.target.method) {

                    this.find = true;
                    path.controller.response(req, res);
                }
            });

            if (!this.find) {

                let index = this.paths.length - 1;
                this.paths[index].controller.response(req, res);
                //paramError.controller.response(req, res);
            }
        }
    }

    /**
     * récupère les informations de la requête
     * 
     * @param {*} req : objet - requête reçue
     */
    parser(req) {

        if(this.tools.filter.isString(req.url) && this.tools.filter.isString(req.method)) {

            this.data.url = req.url;
            this.data.method = req.method;

            this.check = true;
        }
    }

    /**
     * construit la liste des paths disponibles
     */
    build() {

        this.paths = paramPaths;
    }

}

module.exports.Router = Router;