function addWidgetsfrmScanWifi() {
    frmScanWifi.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxBg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var Menu = new FlxTitleBack.Menu({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Menu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxPutihTitleBorder"
    }, {}, {});
    Menu.btnBack.onClick = AS_Button_f706ced29b69464eac37724ab730a18d;
    Menu.lblTitle.text = "Pencarian..";
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60dp",
        "clipBounds": true,
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "25%",
        "height": "150dp",
        "id": "imgLogo",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_logo.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblDibutuhkan = new kony.ui.Label({
        "centerX": "50%",
        "height": "8%",
        "id": "lblDibutuhkan",
        "isVisible": true,
        "skin": "sknLbl100HitamMedium",
        "text": "Dibutuhkan koneksi jaringan",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnCariWifi = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahGradient",
        "height": "8%",
        "id": "btnCariWifi",
        "isVisible": true,
        "onClick": AS_Button_f79b6a47fd294fcc89e376eb5930759d,
        "skin": "sknBtnMerahGradient",
        "text": "Cari Wifi",
        "top": "5%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(imgLogo, lblDibutuhkan, btnCariWifi);
    flxMain.add(Menu, flxIsi);
    frmScanWifi.add(flxMain);
};

function frmScanWifiGlobals() {
    frmScanWifi = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmScanWifi,
        "enabledForIdleTimeout": false,
        "id": "frmScanWifi",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknMerah"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};