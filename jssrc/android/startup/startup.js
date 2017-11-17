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
    isDebug: true,
    middlewareContext: "SmartHome",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: null,
    secureurl: null
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeUserWidgets();
    initializeFBox0cf76dbb5866d4f();
    initializeSegListDeviceSet();
    frmAddDeviceGlobals();
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
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;