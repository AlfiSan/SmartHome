define(function() {
    var controller = require("NavMenu/Beranda/userBerandaController");
    var actions = require("NavMenu/Beranda/BerandaControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});