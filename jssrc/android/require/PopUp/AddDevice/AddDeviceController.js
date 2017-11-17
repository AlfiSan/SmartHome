define(function() {
    var controller = require("PopUp/AddDevice/userAddDeviceController");
    var actions = require("PopUp/AddDevice/AddDeviceControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});