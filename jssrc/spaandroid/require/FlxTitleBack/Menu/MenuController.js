define(function() {
    var controller = require("FlxTitleBack/Menu/userMenuController");
    var actions = require("FlxTitleBack/Menu/MenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});