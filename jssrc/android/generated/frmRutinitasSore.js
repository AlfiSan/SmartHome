function addWidgetsfrmRutinitasSore() {
    frmRutinitasSore.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_a400fbc7c5b64a66b8dd99571b3fe46e;
    Menu.lblTitle.text = "Rutinitas Sore";
    Menu.lblTitle.width = "50%";
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
    var flxBangun = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBangun",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSoreShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxBangun.setDefaultUnit(kony.flex.DP);
    var flxGaris1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris1.setDefaultUnit(kony.flex.DP);
    flxGaris1.add();
    var lblBangun = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblBangun",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Bangun Tidur",
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
    var btnBangun = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnBangun",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_c50f8e24e41d424b807b16d66553191a,
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
    var flxInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxInfo.setDefaultUnit(kony.flex.DP);
    var imgInfo = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "imgInfo",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_titik3.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnInfoBangun = new kony.ui.Button({
        "focusSkin": "sknBtnTransparan",
        "height": "100%",
        "id": "btnInfoBangun",
        "isVisible": true,
        "left": "0dp",
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
    flxInfo.add(imgInfo, btnInfoBangun);
    flxBangun.add(flxGaris1, lblBangun, flxGaris2, btnBangun, flxInfo);
    var flxSarapanPagi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxSarapanPagi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSoreShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxSarapanPagi.setDefaultUnit(kony.flex.DP);
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
    var lblSarapan = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblSarapan",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Sarapan",
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
    var flxGaris4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris4.setDefaultUnit(kony.flex.DP);
    flxGaris4.add();
    var btnSarapan = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnSarapan",
        "isVisible": true,
        "left": "0dp",
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
    var flxInfo2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxInfo2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxInfo2.setDefaultUnit(kony.flex.DP);
    var imgInfo2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "imgInfo2",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_titik3.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnInfoSarapan = new kony.ui.Button({
        "focusSkin": "sknBtnTransparan",
        "height": "100%",
        "id": "btnInfoSarapan",
        "isVisible": true,
        "left": "0dp",
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
    flxInfo2.add(imgInfo2, btnInfoSarapan);
    flxSarapanPagi.add(flxGaris3, lblSarapan, flxGaris4, btnSarapan, flxInfo2);
    flx1.add(flxBangun, flxSarapanPagi);
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
    var flxBerangkat = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxBerangkat",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSoreShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxBerangkat.setDefaultUnit(kony.flex.DP);
    var flxGaris5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris5.setDefaultUnit(kony.flex.DP);
    flxGaris5.add();
    var lblBerangkat = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblBerangkat",
        "isVisible": true,
        "skin": "sknLbl120PutihReg",
        "text": "Berangkat",
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
    var flxGaris6 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris6",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris6.setDefaultUnit(kony.flex.DP);
    flxGaris6.add();
    var btnBerangkat = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnBerangkat",
        "isVisible": true,
        "left": "0dp",
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
    var flxInfo3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxInfo3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "40%",
        "zIndex": 1
    }, {}, {});
    flxInfo3.setDefaultUnit(kony.flex.DP);
    var imgInfo3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "25dp",
        "id": "imgInfo3",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_titik3.png",
        "width": "35dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnInfoBerangkat = new kony.ui.Button({
        "focusSkin": "sknBtnTransparan",
        "height": "100%",
        "id": "btnInfoBerangkat",
        "isVisible": true,
        "left": "0dp",
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
    flxInfo3.add(imgInfo3, btnInfoBerangkat);
    flxBerangkat.add(flxGaris5, lblBerangkat, flxGaris6, btnBerangkat, flxInfo3);
    var flxTambah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxTambah",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxSoreShadow",
        "top": "0dp",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxTambah.setDefaultUnit(kony.flex.DP);
    var flxGaris7 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris7",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris7.setDefaultUnit(kony.flex.DP);
    flxGaris7.add();
    var flxGaris8 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris8",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris8.setDefaultUnit(kony.flex.DP);
    flxGaris8.add();
    var flxBtnTambah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "50%",
        "id": "flxBtnTambah",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "45%",
        "zIndex": 1
    }, {}, {});
    flxBtnTambah.setDefaultUnit(kony.flex.DP);
    var imgTambah = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "100dp",
        "id": "imgTambah",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_plusputihmerah.png",
        "width": "100dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxBtnTambah.add(imgTambah);
    var btnTambah = new kony.ui.Button({
        "centerX": "50.00%",
        "centerY": "50.08%",
        "focusSkin": "sknBtnFokusMerah",
        "height": "70%",
        "id": "btnTambah",
        "isVisible": true,
        "skin": "sknBtnTransparan",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxTambah.add(flxGaris7, flxGaris8, flxBtnTambah, btnTambah);
    flx2.add(flxBerangkat, flxTambah);
    flxIsi.add(flx1, flx2);
    flxMain.add(Menu, flxIsi);
    var Rutinitas = new NavMenu.Rutinitas({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Rutinitas",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    frmRutinitasSore.add(flxMain, Rutinitas);
};

function frmRutinitasSoreGlobals() {
    frmRutinitasSore = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRutinitasSore,
        "enabledForIdleTimeout": false,
        "id": "frmRutinitasSore",
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