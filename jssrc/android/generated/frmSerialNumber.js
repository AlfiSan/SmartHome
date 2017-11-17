function addWidgetsfrmSerialNumber() {
    frmSerialNumber.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_ebbc828797d7407db10aa20a942b8009;
    Menu.lblTitle.text = "Serial Number";
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
    var flxUsername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "10%",
        "id": "flxUsername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "10%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxUsername.setDefaultUnit(kony.flex.DP);
    var txtUsername = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "95%",
        "id": "txtUsername",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "0dp",
        "onTouchStart": AS_TextField_a5b914fd74214f28862aae27098f6258,
        "placeholder": "Tolong Masukkan Serial Number",
        "secureTextEntry": false,
        "skin": "sknTxtBox100Hitam",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "onBeginEditing": AS_TextField_cc99ff95595b49cdba5d33ac8583ca21,
        "onEndEditing": AS_TextField_de0186cf6af047d082f98b5241d57256,
        "placeholderSkin": "sknPlaceHolder100Abu",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxGaris = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "2dp",
        "id": "flxGaris",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxGarisHitam",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris.setDefaultUnit(kony.flex.DP);
    flxGaris.add();
    flxUsername.add(txtUsername, flxGaris);
    var flxOk = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "flxOk",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "8%",
        "width": "30%",
        "zIndex": 1
    }, {}, {});
    flxOk.setDefaultUnit(kony.flex.DP);
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "sknBtnFokusMerahGradient",
        "height": "80%",
        "id": "btnLogin",
        "isVisible": true,
        "onClick": AS_Button_f3ea05c769b7450c81f16e377d1420d4,
        "skin": "sknBtnMerahGradient",
        "text": "OK",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOk.add(btnLogin);
    flxIsi.add(flxUsername, flxOk);
    flxMain.add(Menu, flxIsi);
    frmSerialNumber.add(flxMain);
};

function frmSerialNumberGlobals() {
    frmSerialNumber = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmSerialNumber,
        "enabledForIdleTimeout": false,
        "id": "frmSerialNumber",
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