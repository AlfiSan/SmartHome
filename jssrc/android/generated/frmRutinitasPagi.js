function addWidgetsfrmRutinitasPagi() {
    frmRutinitasPagi.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_e78f2d933096482fa9a237be27097ea8;
    Menu.lblTitle.text = "Rutinitas Pagi";
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
        "skin": "sknFlxPagiShadow",
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
        "onClick": AS_Button_c693a0b60b9d4d2f96af47a4ffbb89f2,
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
        "onClick": AS_Button_cc1b793a4c474887aeaa8cb7efa6056f,
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
        "skin": "sknFlxPagiShadow",
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
        "onClick": AS_Button_cc1b793a4c474887aeaa8cb7efa6056f,
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
        "skin": "sknFlxPagiShadow",
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
        "onClick": AS_Button_cc1b793a4c474887aeaa8cb7efa6056f,
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
        "skin": "sknFlxPagiShadow",
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
    var flxPopUpSudah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPopUpSudah",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknShadowPopUp",
        "top": "1dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxPopUpSudah.setDefaultUnit(kony.flex.DP);
    var flxOpsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxOpsi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlxShadowWhite",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    flxOpsi.setDefaultUnit(kony.flex.DP);
    var flxClose = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxClose",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxClose.setDefaultUnit(kony.flex.DP);
    var btnClose = new kony.ui.Button({
        "focusSkin": "sknBtnTransparanRound",
        "height": "100%",
        "id": "btnClose",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a22e49826f644235a6ed95b15e04424e,
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
    var imgClose = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "30dp",
        "id": "imgClose",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_close.png",
        "width": "30dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxClose.add(btnClose, imgClose);
    var flxPilihan = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "75%",
        "id": "flxPilihan",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "top": "20%",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxPilihan.setDefaultUnit(kony.flex.DP);
    var btnPengaturan = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahRound",
        "height": "23%",
        "id": "btnPengaturan",
        "isVisible": true,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Pengaturan",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnDevice = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahRound",
        "height": "23%",
        "id": "btnDevice",
        "isVisible": true,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Device",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnHapusRutinitas = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "sknBtnFokusMerahRound",
        "height": "23%",
        "id": "btnHapusRutinitas",
        "isVisible": true,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Rutinitas",
        "top": "5%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxPilihan.add(btnPengaturan, btnDevice, btnHapusRutinitas);
    flxOpsi.add(flxClose, flxPilihan);
    flxPopUpSudah.add(flxOpsi);
    var flxPopUpBelum = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxPopUpBelum",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknShadowPopUp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 3
    }, {}, {});
    flxPopUpBelum.setDefaultUnit(kony.flex.DP);
    var flxOpsi2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "40%",
        "id": "flxOpsi2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlxShadowWhite",
        "width": "85%",
        "zIndex": 1
    }, {}, {});
    flxOpsi2.setDefaultUnit(kony.flex.DP);
    var flxTextInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxTextInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxTextInfo.setDefaultUnit(kony.flex.DP);
    var lblTextInfo = new kony.ui.Label({
        "centerX": "50%",
        "height": "80%",
        "id": "lblTextInfo",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLblHitam130Med",
        "text": "Maaf anda belum memasukkan alat di Rutinitas ini !",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxTextInfo.add(lblTextInfo);
    var flxOpsion = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "20%",
        "centerX": "50%",
        "clipBounds": true,
        "height": "20%",
        "id": "flxOpsion",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "width": "90%",
        "zIndex": 1
    }, {}, {});
    flxOpsion.setDefaultUnit(kony.flex.DP);
    var btnCancel = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnFokusMerahRound",
        "height": "70%",
        "id": "btnCancel",
        "isVisible": true,
        "onClick": AS_Button_a22e49826f644235a6ed95b15e04424e,
        "skin": "sknBtnBorderRoundAbu",
        "text": "Cancel",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnAdd = new kony.ui.Button({
        "centerY": "50%",
        "focusSkin": "sknBtnFokusMerahRound",
        "height": "70%",
        "id": "btnAdd",
        "isVisible": true,
        "left": "5%",
        "skin": "sknBtnMerahGradient",
        "text": "Tambah",
        "width": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOpsion.add(btnCancel, btnAdd);
    flxOpsi2.add(flxTextInfo, flxOpsion);
    flxPopUpBelum.add(flxOpsi2);
    frmRutinitasPagi.add(flxMain, Rutinitas, flxPopUpSudah, flxPopUpBelum);
};

function frmRutinitasPagiGlobals() {
    frmRutinitasPagi = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmRutinitasPagi,
        "enabledForIdleTimeout": false,
        "id": "frmRutinitasPagi",
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