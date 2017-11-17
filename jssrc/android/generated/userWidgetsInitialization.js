function initializeUserWidgets() {
    kony.mvc.registry.add("FlxTitleBack.Menu", "Menu", "MenuController");
    kony.application.registerMaster({
        "namespace": "FlxTitleBack",
        "classname": "Menu",
        "name": "FlxTitleBack.Menu"
    });
    kony.mvc.registry.add("FlxTitleOpsi.Menu", "Menu", "MenuController");
    kony.application.registerMaster({
        "namespace": "FlxTitleOpsi",
        "classname": "Menu",
        "name": "FlxTitleOpsi.Menu"
    });
    kony.mvc.registry.add("FlxTitlePlus.Menu", "Menu", "MenuController");
    kony.application.registerMaster({
        "namespace": "FlxTitlePlus",
        "classname": "Menu",
        "name": "FlxTitlePlus.Menu"
    });
    kony.mvc.registry.add("FlxTitleTxt.Menu", "Menu", "MenuController");
    kony.application.registerMaster({
        "namespace": "FlxTitleTxt",
        "classname": "Menu",
        "name": "FlxTitleTxt.Menu"
    });
    kony.mvc.registry.add("NavMenu.Beranda", "Beranda", "BerandaController");
    kony.application.registerMaster({
        "namespace": "NavMenu",
        "classname": "Beranda",
        "name": "NavMenu.Beranda"
    });
    kony.mvc.registry.add("NavMenu.Devices", "Devices", "DevicesController");
    kony.application.registerMaster({
        "namespace": "NavMenu",
        "classname": "Devices",
        "name": "NavMenu.Devices"
    });
    kony.mvc.registry.add("NavMenu.Ruangan", "Ruangan", "RuanganController");
    kony.application.registerMaster({
        "namespace": "NavMenu",
        "classname": "Ruangan",
        "name": "NavMenu.Ruangan"
    });
    kony.mvc.registry.add("NavMenu.Rutinitas", "Rutinitas", "RutinitasController");
    kony.application.registerMaster({
        "namespace": "NavMenu",
        "classname": "Rutinitas",
        "name": "NavMenu.Rutinitas"
    });
    kony.mvc.registry.add("PopUp.AddDevice", "AddDevice", "AddDeviceController");
    kony.application.registerMaster({
        "namespace": "PopUp",
        "classname": "AddDevice",
        "name": "PopUp.AddDevice"
    });
}