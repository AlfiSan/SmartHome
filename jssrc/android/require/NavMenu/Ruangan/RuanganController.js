define(function() {
    var controller = require("NavMenu/Ruangan/userRuanganController");
    var actions = require("NavMenu/Ruangan/RuanganControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});