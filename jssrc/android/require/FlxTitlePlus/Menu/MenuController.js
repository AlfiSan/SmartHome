define(function() {
    var controller = require("FlxTitlePlus/Menu/userMenuController");
    var actions = require("FlxTitlePlus/Menu/MenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});