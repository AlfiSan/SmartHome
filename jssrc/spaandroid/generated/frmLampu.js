function addWidgetsfrmLampu() {
    frmLampu.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxPutih",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var Devices = new NavMenu.Devices({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Devices",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    var Menu = new FlxTitleBack.Menu({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Menu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxPutihTitleBorder"
    }, {}, {});
    Menu.btnBack.onClick = AS_Button_a47479b11fcd46d7bda74889e2ae1943;
    Menu.lblTitle.text = "Lampu";
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
    var flxGambar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxGambar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGambar.setDefaultUnit(kony.flex.DP);
    var imgLampu = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "200dp",
        "id": "imgLampu",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "200dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxGambar.add(imgLampu);
    var flxButton = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxButton",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxButton.setDefaultUnit(kony.flex.DP);
    var btnTurnOn = new kony.ui.Button({
        "centerY": "50%",
        "height": "75%",
        "id": "btnTurnOn",
        "isVisible": true,
        "left": "3%",
        "skin": "sknBtnMerahGradient",
        "text": "Turn On",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAturWaktu = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnRoundFocus",
        "height": "75%",
        "id": "btnAturWaktu",
        "isVisible": true,
        "left": "5%",
        "skin": "sknBtnRoundWhite",
        "text": "Atur Waktu",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxButton.add(btnTurnOn, btnAturWaktu);
    flxIsi.add(flxGambar, flxButton);
    flxMain.add(Devices, Menu, flxIsi);
    frmLampu.add(flxMain);
};

function frmLampuGlobals() {
    frmLampu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLampu,
        "enabledForIdleTimeout": false,
        "id": "frmLampu",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknMerah"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
};