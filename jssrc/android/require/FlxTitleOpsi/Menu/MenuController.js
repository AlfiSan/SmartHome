define(function() {
    var controller = require("FlxTitleOpsi/Menu/userMenuController");
    var actions = require("FlxTitleOpsi/Menu/MenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});