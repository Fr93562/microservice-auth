'use-strict';

let loginSecurityController = require("../controllers/Security/Login");

let notFoundController = require('../controllers/Error/NotFound');

/**
 * liste des routes
 * 
 * @author : François Macko
 */
module.exports = [
    {
        target : {
            path : "/",
            method : "GET",
        },
        require : {
            auth : false,
            body : false,
        },
        controller : new loginSecurityController.Login()
    },
    {
        target : {
            path : "/error",
            method : "GET",
        },
        require : {
            auth : false,
            body : false,
        },
        controller : new notFoundController.NotFound()
    },
];
