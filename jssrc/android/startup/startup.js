//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SmartHome",
    appName: "SmartHome",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "127.0.0.1",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "SmartHome",
    isturlbase: "https://kony.dimma.id:443/services",
    isMFApp: true,
    appKey: "be84105052ca5d9c979ca43a3d645749",
    appSecret: "d47a839d1e0ce52a31dfab3d5f893b3e",
    serviceUrl: "https://kony.dimma.id/authService/100000002/appconfig",
    svcDoc: {
        "appId": "38cc86eb-bbd8-4120-9704-b4bf6469c87e",
        "baseId": "2792e84f-7495-4851-9a6e-4e90d3643fda",
        "name": "SmartLiving",
        "selflink": "https://kony.dimma.id/authService/100000002/appconfig",
        "integsvc": {
            "NewAPI": "https://kony.dimma.id:443/services/NewAPI",
            "iCodeAPI": "https://kony.dimma.id:443/services/iCodeAPI",
            "SmartLiving": "https://kony.dimma.id:443/services/SmartLiving"
        },
        "reportingsvc": {
            "custom": "https://kony.dimma.id:443/services/CMS",
            "session": "https://kony.dimma.id:443/services/IST"
        },
        "Webapp": {
            "url": "https://kony.dimma.id:443/belajar"
        },
        "services_meta": {
            "NewAPI": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/NewAPI",
                "type": "integsvc"
            },
            "iCodeAPI": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/iCodeAPI",
                "type": "integsvc"
            },
            "SmartLiving": {
                "version": "1.0",
                "url": "https://kony.dimma.id:443/services/SmartLiving",
                "type": "integsvc"
            }
        }
    },
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://kony.dimma.id:443/admin/SmartHome/MWServlet",
    secureurl: "https://kony.dimma.id:443/admin/SmartHome/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeFBox0cf76dbb5866d4f();
    initializeSegListDeviceSet();
    initializeSegListJadwal();
    alertPopUpGlobals();
    frmAddDeviceGlobals();
    frmAturLampuGlobals();
    frmBangunPagiGlobals();
    frmLampuGlobals();
    frmLoginGlobals();
    frmMainMenuGlobals();
    frmPeralatanGlobals();
    frmPeralatanPopUpGlobals();
    frmPilihAlatDariWifiGlobals();
    frmPilihWifiDeviceGlobals();
    frmQrCodeGlobals();
    frmRuanganGlobals();
    frmRuangDapurGlobals();
    frmRuangKeluargaGlobals();
    frmRuangMandiGlobals();
    frmRuangTidurGlobals();
    frmRutinitasGlobals();
    frmRutinitasMalamGlobals();
    frmRutinitasPagiGlobals();
    frmRutinitasSettingGlobals();
    frmRutinitasSiangGlobals();
    frmRutinitasSoreGlobals();
    frmScanWifiGlobals();
    frmSerialNumberGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7300
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmLogin.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_qrScan"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
kony.print = function() {
    return;
};