"use strict";

/**
 * outil de gestion des routes
 * 
 * @author : Francois Macko
 */
class Filter {

    constructor () {

    }

    /**
     * vérifie si la variable entrante est un string
     * renvoie true si c'est un string
     * 
     * @param {*} value : any - variable à vérifier
     */
    isString(value) {

        let response = false;

        if(typeof value === "string") {

            response = true;
        }
        return response;
    }

    /**
     * vérifie si la variable entrante est un number
     * renvoie true si c'est un number
     * 
     * @param {*} value : any - variable à vérifier
     */
    isNumber(value) {

        let response = false;

        if(typeof value === "number") {

            response = true;
        }
        return response;
    }

    /**
     * vérifie si la variable entrante est un booléen
     * renvoie true si c'est un booléen
     * 
     * @param {*} value : any - variable à vérifier
     */
    isBoolean(value) {

        let response = false;

        if(typeof value === "boolean") {

            response = true;
        }
        return response;
    }

    /**
     * vérifie si la variable entrante est un object
     * renvoie true si c'est un object
     * 
     * @param {*} value : any - variable à vérifier
     */
    isObject(value) {

        let response = false;

        if(typeof value === "object") {

            response = true;
        }
        return response;
    }
}

module.exports.Filter = Filter;