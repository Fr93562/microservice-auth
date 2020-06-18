'use-strict';

let loginSecurityController = require("../controllers/Security/Login");

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
];
