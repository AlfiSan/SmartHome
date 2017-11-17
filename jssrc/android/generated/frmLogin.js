function addWidgetsfrmLogin() {
    frmLogin.setDefaultUnit(kony.flex.DP);
    var flxMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxMain",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "sknFlxBg",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxMain.setDefaultUnit(kony.flex.DP);
    var flxImgLogo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "130dp",
        "id": "flxImgLogo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "10%",
        "width": "150dp",
        "zIndex": 1
    }, {}, {});
    flxImgLogo.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "height": "100%",
        "id": "imgLogo",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_logo.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgLogo.add(imgLogo);
    var flxTitle = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "flxTitle",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxTitle.setDefaultUnit(kony.flex.DP);
    var lblTitle = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "80%",
        "id": "lblTitle",
        "isVisible": true,
        "skin": "sknLbl100HitamMedium",
        "text": "Masuk dengan akun MyIndiHome Anda",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTitle.add(lblTitle);
    var flxInput = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50.00%",
        "clipBounds": true,
        "height": "25%",
        "id": "flxInput",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "top": "5.00%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxInput.setDefaultUnit(kony.flex.DP);
    var flxUsername = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxUsername",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
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
        "placeholder": "Username",
        "secureTextEntry": false,
        "skin": "sknTxtBox100Hitam",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "onBeginEditing": AS_TextField_a08a17f727574c7f838371bffbc38a68,
        "onEndEditing": AS_TextField_f821c3bdb807485cabe09491201c9ef1,
        "placeholderSkin": "sknPlaceHolder100Abu",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var flxGaris = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "1dp",
        "id": "flxGaris",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris.setDefaultUnit(kony.flex.DP);
    flxGaris.add();
    flxUsername.add(txtUsername, flxGaris);
    var flxPassword = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxPassword",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5dp",
        "width": "100%",
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
        "onDone": AS_TextField_e0afc4eb15454b4cb883d7c8e7d3f824,
        "placeholder": "Password",
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
        "onBeginEditing": AS_TextField_gda4469386f84f479131fe9d358233d2,
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
        "onClick": AS_Button_f8b63462b1b2465bb9c1e5cba34d0b1a,
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
        "onClick": AS_Button_d0b091294e874aa7bf0d2d050965214d,
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
    var flxLupaPass = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxLupaPass",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxLupaPass.setDefaultUnit(kony.flex.DP);
    var lblLupaPass = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLupaPass",
        "isVisible": true,
        "left": "55%",
        "skin": "sknLbl80HitamReg",
        "text": "Lupa Password,",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnLupaPass = new kony.ui.Button({
        "centerY": "45%",
        "focusSkin": "sknBtnFokusMerahPolos",
        "height": "60%",
        "id": "btnLupaPass",
        "isVisible": true,
        "left": "1%",
        "right": "0dp",
        "skin": "sknBtn80MerahReg",
        "text": "klik disini !",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLupaPass.add(lblLupaPass, btnLupaPass);
    flxInput.add(flxUsername, flxPassword, flxLupaPass);
    var flxLogin = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "flxLogin",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxLogin.setDefaultUnit(kony.flex.DP);
    var btnLogin = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "sknBtnFokusMerahGradient",
        "height": "80%",
        "id": "btnLogin",
        "isVisible": true,
        "onClick": AS_Button_d46dcf03688f4a7ea17eb8ac794d3f1e,
        "skin": "sknBtnMerahGradient",
        "text": "Masuk",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxLogin.add(btnLogin);
    flxMain.add(flxImgLogo, flxTitle, flxInput, flxLogin);
    frmLogin.add(flxMain);
};

function frmLoginGlobals() {
    frmLogin = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLogin,
        "enabledForIdleTimeout": false,
        "id": "frmLogin",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknFormBg"
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
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
};