function addWidgetsfrmQrCode() {
    frmQrCode.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_i07c635bcfd34676b19c5380f29b710c;
    Menu.lblTitle.text = "QR Code";
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
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
    var flxScanQr = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "30%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxScanQr",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknWhiteBorderQr",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxScanQr.setDefaultUnit(kony.flex.DP);
    flxScanQr.add();
    var lblInfo = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "lblInfo",
        "isVisible": false,
        "skin": "sknLbl100HitamMedium",
        "text": "Mohon Posisikan Kode QR dalam bingkai",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnScanQr = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnRoundFocusAbu",
        "height": "9%",
        "id": "btnScanQr",
        "isVisible": true,
        "onClick": AS_Button_b991c6ca7ec643bd99ff44debb30d607,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Scan Qr Code",
        "top": "30%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSerialNumber = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnRoundFocusAbu",
        "height": "9%",
        "id": "btnSerialNumber",
        "isVisible": true,
        "onClick": AS_Button_fa284a35ab9647438ac20d74206c2ce5,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Serial Number",
        "top": "5%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(flxScanQr, lblInfo, btnScanQr, btnSerialNumber);
    flxMain.add(Menu, flxIsi);
    frmQrCode.add(flxMain);
};

function frmQrCodeGlobals() {
    frmQrCode = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmQrCode,
        "enabledForIdleTimeout": false,
        "id": "frmQrCode",
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