const express = require('express');
const med_routes = express.Router();
const user_controller = require('../controller/user_controller');
const user_validation = require('../validation/user_validation')
const global_middleware = require('../global_middlewares/global_middleware')


function initilization() {
    getRoutes();
    postRoutes();
    putRoutes();
}

initilization();


function getRoutes() {
    
}

function postRoutes() {
    med_routes.post("/login", user_validation.user_login(), global_middleware.ractifyError, user_controller.userLogin);
    med_routes.post("/register", user_validation.user_register(), global_middleware.ractifyError, user_controller.userRegistration);
    
}

function putRoutes() {
    med_routes.put("/forgot-password",user_validation.forgetpasswords(), global_middleware.ractifyError,user_controller.forgetpassword);
}

module.exports = med_routes;