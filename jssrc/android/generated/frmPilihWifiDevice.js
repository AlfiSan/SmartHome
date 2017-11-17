function addWidgetsfrmPilihWifiDevice() {
    frmPilihWifiDevice.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_d18748ec91354ed89665e0eca1610482;
    Menu.lblTitle.text = "Sambungkan";
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
    var lblPilihWifi = new kony.ui.Label({
        "centerX": "50%",
        "height": "15%",
        "id": "lblPilihWifi",
        "isVisible": true,
        "skin": "sknLbl120HitamReg",
        "text": "Pilih Wifi Untuk Menyambungkan Device",
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
    var lbxPilihWifiDevice = new kony.ui.ListBox({
        "centerX": "50%",
        "height": "10%",
        "id": "lbxPilihWifiDevice",
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
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxPassword.setDefaultUnit(kony.flex.DP);
    var txtPassword = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "95%",
        "id": "txtPassword",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Password Wifi",
        "secureTextEntry": true,
        "skin": "sknTxtBox100Hitam",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknPlaceHolder100Abu",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var txtPassText = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "95%",
        "id": "txtPassText",
        "isVisible": false,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "placeholder": "Password",
        "secureTextEntry": false,
        "skin": "sknTxtBox100Hitam",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "88%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "sknPlaceHolder100Abu",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxGaris2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxGaris2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris2.setDefaultUnit(kony.flex.DP);
    flxGaris2.add();
    var flxCek = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxCek",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxCek.setDefaultUnit(kony.flex.DP);
    var btnHide = new kony.ui.Button({
        "focusSkin": "sknBtnHide",
        "height": "100%",
        "id": "btnHide",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a346c7003f3048f089083c787a914250,
        "skin": "sknBtnHide",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnShow = new kony.ui.Button({
        "focusSkin": "sknBtnShow",
        "height": "100%",
        "id": "btnShow",
        "isVisible": false,
        "left": "0dp",
        "onClick": AS_Button_fae37848a0714b639f59b016a262f08d,
        "skin": "sknBtnShow",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxCek.add(btnHide, btnShow);
    flxPassword.add(txtPassword, txtPassText, flxGaris2, flxCek);
    var btnSubmit = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahGradient",
        "height": "10%",
        "id": "btnSubmit",
        "isVisible": true,
        "skin": "sknBtnMerahGradient",
        "text": "Submit",
        "top": "15%",
        "width": "75%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(lblPilihWifi, lbxPilihWifiDevice, flxPassword, btnSubmit);
    flxMain.add(Menu, flxIsi);
    frmPilihWifiDevice.add(flxMain);
};

function frmPilihWifiDeviceGlobals() {
    frmPilihWifiDevice = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPilihWifiDevice,
        "enabledForIdleTimeout": false,
        "id": "frmPilihWifiDevice",
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