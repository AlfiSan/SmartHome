function addWidgetsfrmPilihAlatDariWifi() {
    frmPilihAlatDariWifi.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_f516fef7f18d4f1bb0bb6184c74af3f2;
    Menu.lblTitle.text = "Pilih Alat";
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
    var lblPilihAlat = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "lblPilihAlat",
        "isVisible": true,
        "skin": "sknLbl120HitamReg",
        "text": "Pilih alat yang ingin ditambahkan ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "10%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lbxPilihAlat = new kony.ui.ListBox({
        "centerX": "50%",
        "height": "10%",
        "id": "lbxPilihAlat",
        "isVisible": true,
        "masterData": [
            ["lb1", "Lampu 1A"],
            ["lb2", "Lampu 1B"],
            ["lb3", "Lampu 1C"]
        ],
        "skin": "sknLbx100Hitam",
        "top": "5%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Pilih Alat..",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var btnSambung = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahGradient",
        "height": "10%",
        "id": "btnSambung",
        "isVisible": true,
        "onClick": AS_Button_db7a7ce5e2814a9d8aa55bdad3c0bb0b,
        "skin": "sknBtnMerahGradient",
        "text": "Sambungkan",
        "top": "15%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnCariLagi = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnRoundFocusAbu",
        "height": "10%",
        "id": "btnCariLagi",
        "isVisible": true,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Cari lagi",
        "top": "5%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(lblPilihAlat, lbxPilihAlat, btnSambung, btnCariLagi);
    flxMain.add(Menu, flxIsi);
    frmPilihAlatDariWifi.add(flxMain);
};

function frmPilihAlatDariWifiGlobals() {
    frmPilihAlatDariWifi = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPilihAlatDariWifi,
        "enabledForIdleTimeout": false,
        "id": "frmPilihAlatDariWifi",
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