define(function() {
    var controller = require("NavMenu/Profil/userProfilController");
    var actions = require("NavMenu/Profil/ProfilControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});