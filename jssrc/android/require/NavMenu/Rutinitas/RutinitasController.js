define(function() {
    var controller = require("NavMenu/Rutinitas/userRutinitasController");
    var actions = require("NavMenu/Rutinitas/RutinitasControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});