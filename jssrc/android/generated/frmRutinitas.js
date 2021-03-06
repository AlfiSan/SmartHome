function addWidgetsfrmRutinitas() {
    frmRutinitas.setDefaultUnit(kony.flex.DP);
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
    var Menu = new FlxTitleTxt.Menu({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Menu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxPutihTitleBorder"
    }, {}, {});
    Menu.lblTitle.text = "Rutinitas";
    var Rutinitas = new NavMenu.Rutinitas({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Rutinitas",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "63%",
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "20%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var flx1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flx1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx1.setDefaultUnit(kony.flex.DP);
    var flxPagi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxPagi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxPagiShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxPagi.setDefaultUnit(kony.flex.DP);
    var flxGaris3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris3.setDefaultUnit(kony.flex.DP);
    flxGaris3.add();
    var imgPagi = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgPagi",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_pagi.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblPagi = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblPagi",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Pagi",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris2.setDefaultUnit(kony.flex.DP);
    flxGaris2.add();
    var btnPagi = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnPagi",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_e5e6b410b2aa49858f3ce1bf5ad84356,
        "skin": "sknBtnTransparan",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPagi.add(flxGaris3, imgPagi, lblPagi, flxGaris2, btnPagi);
    var flxSiang = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxSiang",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSiangShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxSiang.setDefaultUnit(kony.flex.DP);
    var flxGaris4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris4.setDefaultUnit(kony.flex.DP);
    flxGaris4.add();
    var imgSiang = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgSiang",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_siang.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSiang = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblSiang",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Siang",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris5.setDefaultUnit(kony.flex.DP);
    flxGaris5.add();
    var btnSiang = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnSiang",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_be6f44ba68eb4c199043983a2debd62e,
        "skin": "sknBtnTransparan",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSiang.add(flxGaris4, imgSiang, lblSiang, flxGaris5, btnSiang);
    flx1.add(flxPagi, flxSiang);
    var flx2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "flx2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx2.setDefaultUnit(kony.flex.DP);
    var flxSore = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxSore",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSoreShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxSore.setDefaultUnit(kony.flex.DP);
    var flxGaris6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris6.setDefaultUnit(kony.flex.DP);
    flxGaris6.add();
    var imgSore = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgSore",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_sore.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblSore = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblSore",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Sore",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris7.setDefaultUnit(kony.flex.DP);
    flxGaris7.add();
    var btnSore = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnSore",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_cd0c794a5b9b469e9c81fc81b5613c6f,
        "skin": "sknBtnTransparan",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxSore.add(flxGaris6, imgSore, lblSore, flxGaris7, btnSore);
    var flxMalam = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxMalam",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxMalamShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxMalam.setDefaultUnit(kony.flex.DP);
    var flxGaris8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris8.setDefaultUnit(kony.flex.DP);
    flxGaris8.add();
    var imgMalam = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgMalam",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_malam.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblMalam = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblMalam",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Malam",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "60%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris9 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris9",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris9.setDefaultUnit(kony.flex.DP);
    flxGaris9.add();
    var btnMalam = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnMalam",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_h6ae6a66507e48e68bd02a8d1f09b094,
        "skin": "sknBtnTransparan",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxMalam.add(flxGaris8, imgMalam, lblMalam, flxGaris9, btnMalam);
    flx2.add(flxSore, flxMalam);
    flxIsi.add(flx1, flx2);
    flxMain.add(Menu, Rutinitas, flxIsi);
    frmRutinitas.add(flxMain);
};

function frmRutinitasGlobals() {
    frmRutinitas = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRutinitas,
        "enabledForIdleTimeout": false,
        "id": "frmRutinitas",
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