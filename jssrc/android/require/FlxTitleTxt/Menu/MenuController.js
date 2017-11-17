define(function() {
    var controller = require("FlxTitleTxt/Menu/userMenuController");
    var actions = require("FlxTitleTxt/Menu/MenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});