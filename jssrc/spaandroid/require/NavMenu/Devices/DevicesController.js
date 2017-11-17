define(function() {
    var controller = require("NavMenu/Devices/userDevicesController");
    var actions = require("NavMenu/Devices/DevicesControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});