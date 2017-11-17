function addWidgetsfrmPeralatan() {
    frmPeralatan.setDefaultUnit(kony.flex.DP);
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
    var Menu = new FlxTitlePlus.Menu({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Menu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxPutihTitleBorder"
    }, {}, {});
    Menu.btnTambah.onClick = AS_Button_bd6b26989fe542df92b59016d94a4af3;
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60dp",
        "centerX": "50%",
        "clipBounds": true,
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "skin": "slFbox",
        "top": "10%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var flx1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flx1",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx1.setDefaultUnit(kony.flex.DP);
    var flxLampu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxLampu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxLampu.setDefaultUnit(kony.flex.DP);
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
    var imgLampu = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgLampu",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_lampu.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    var btnLampu = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnLampu",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_ceb6548d6ad348499496029bb41238bf,
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
    flxLampu.add(flxGaris1, imgLampu, flxGaris2, btnLampu);
    var flxAc = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxAc",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxAc.setDefaultUnit(kony.flex.DP);
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
    var imgAc = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgAc",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_ac.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    var btnAc = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnAc",
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
    flxAc.add(flxGaris3, imgAc, flxGaris4, btnAc);
    var flxCook = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxCook",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxCook.setDefaultUnit(kony.flex.DP);
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
    var imgCook = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgCook",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_ac.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    var btnCook = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnCook",
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
    flxCook.add(flxGaris5, imgCook, flxGaris6, btnCook);
    flx1.add(flxLampu, flxAc, flxCook);
    var flx2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flx2",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx2.setDefaultUnit(kony.flex.DP);
    var flxMesinCuci = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxMesinCuci",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxMesinCuci.setDefaultUnit(kony.flex.DP);
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
    var imgMesinCuci = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgMesinCuci",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_wash.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
    var btnMesinCuci = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnMesinCuci",
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
    flxMesinCuci.add(flxGaris7, imgMesinCuci, flxGaris8, btnMesinCuci);
    var flxTv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxTv",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxTv.setDefaultUnit(kony.flex.DP);
    var flxGaris9 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris9",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris9.setDefaultUnit(kony.flex.DP);
    flxGaris9.add();
    var imgTv = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgTv",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_tv.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris10 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris10",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris10.setDefaultUnit(kony.flex.DP);
    flxGaris10.add();
    var btnTv = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnTv",
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
    flxTv.add(flxGaris9, imgTv, flxGaris10, btnTv);
    var flxTermos = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxTermos",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxTermos.setDefaultUnit(kony.flex.DP);
    var flxGaris11 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris11",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris11.setDefaultUnit(kony.flex.DP);
    flxGaris11.add();
    var imgTermos = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgTermos",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_termos.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris12 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris12",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris12.setDefaultUnit(kony.flex.DP);
    flxGaris12.add();
    var btnTermos = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnTermos",
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
    flxTermos.add(flxGaris11, imgTermos, flxGaris12, btnTermos);
    flx2.add(flxMesinCuci, flxTv, flxTermos);
    var flx3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flx3",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx3.setDefaultUnit(kony.flex.DP);
    var flxSound = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxSound",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxSound.setDefaultUnit(kony.flex.DP);
    var flxGaris13 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris13",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris13.setDefaultUnit(kony.flex.DP);
    flxGaris13.add();
    var imgSound = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgSound",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_sound.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris14 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris14",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris14.setDefaultUnit(kony.flex.DP);
    flxGaris14.add();
    var btnSound = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnSound",
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
    flxSound.add(flxGaris13, imgSound, flxGaris14, btnSound);
    var flxJendela = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxJendela",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxJendela.setDefaultUnit(kony.flex.DP);
    var flxGaris15 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris15",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris15.setDefaultUnit(kony.flex.DP);
    flxGaris15.add();
    var imgJendela = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgJendela",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_jendela.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris16 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris16",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris16.setDefaultUnit(kony.flex.DP);
    flxGaris16.add();
    var btnSuhu = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnSuhu",
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
    flxJendela.add(flxGaris15, imgJendela, flxGaris16, btnSuhu);
    var flxKopi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxKopi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxKopi.setDefaultUnit(kony.flex.DP);
    var flxGaris17 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris17",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris17.setDefaultUnit(kony.flex.DP);
    flxGaris17.add();
    var imgKopi = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgKopi",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_kopi.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris18 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris18",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris18.setDefaultUnit(kony.flex.DP);
    flxGaris18.add();
    var btnKopi = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnKopi",
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
    flxKopi.add(flxGaris17, imgKopi, flxGaris18, btnKopi);
    flx3.add(flxSound, flxJendela, flxKopi);
    var flx4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "17%",
        "id": "flx4",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flx4.setDefaultUnit(kony.flex.DP);
    var flxKipas = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxKipas",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxKipas.setDefaultUnit(kony.flex.DP);
    var flxGaris19 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris19",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris19.setDefaultUnit(kony.flex.DP);
    flxGaris19.add();
    var imgKipas = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgKipas",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_kipas.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris20 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris20",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris20.setDefaultUnit(kony.flex.DP);
    flxGaris20.add();
    var btnKipas = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnKipas",
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
    flxKipas.add(flxGaris19, imgKipas, flxGaris20, btnKipas);
    var flxCctv = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxCctv",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxCctv.setDefaultUnit(kony.flex.DP);
    var flxGaris21 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris21",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris21.setDefaultUnit(kony.flex.DP);
    flxGaris21.add();
    var imgCctv = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgCctv",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_cctv.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris22 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris22",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris22.setDefaultUnit(kony.flex.DP);
    flxGaris22.add();
    var btnCctv = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnCctv",
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
    flxCctv.add(flxGaris21, imgCctv, flxGaris22, btnCctv);
    var flxAlarm = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "90%",
        "id": "flxAlarm",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "25%",
        "zIndex": 1
    }, {}, {});
    flxAlarm.setDefaultUnit(kony.flex.DP);
    var flxGaris23 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris23",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris23.setDefaultUnit(kony.flex.DP);
    flxGaris23.add();
    var imgAlarm = new kony.ui.Image2({
        "centerX": "47%",
        "centerY": "48%",
        "height": "50dp",
        "id": "imgAlarm",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_alarm.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxGaris24 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris24",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGarisRound",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris24.setDefaultUnit(kony.flex.DP);
    flxGaris24.add();
    var btnAlarm = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnAlarm",
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
    flxAlarm.add(flxGaris23, imgAlarm, flxGaris24, btnAlarm);
    flx4.add(flxKipas, flxCctv, flxAlarm);
    flxIsi.add(flx1, flx2, flx3, flx4);
    var Devices = new NavMenu.Devices({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Devices",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    flxMain.add(Menu, flxIsi, Devices);
    frmPeralatan.add(flxMain);
};

function frmPeralatanGlobals() {
    frmPeralatan = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPeralatan,
        "enabledForIdleTimeout": false,
        "id": "frmPeralatan",
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