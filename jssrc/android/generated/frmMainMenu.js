function addWidgetsfrmMainMenu() {
    frmMainMenu.setDefaultUnit(kony.flex.DP);
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
    var flxTitleBar = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "flxTitleBar",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxPutih",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTitleBar.setDefaultUnit(kony.flex.DP);
    var imgLogo = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50dp",
        "id": "imgLogo",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "ic_logoberanda.png",
        "width": "190dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxNotif = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxNotif",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "14%",
        "skin": "slFbox",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxNotif.setDefaultUnit(kony.flex.DP);
    var imgNotif1 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNotif1",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_notif.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgNotif2 = new kony.ui.Image2({
        "height": "100%",
        "id": "imgNotif2",
        "isVisible": false,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_adanotif_02.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnNotif = new kony.ui.Button({
        "focusSkin": "sknBtnRoundFocusAbu",
        "height": "100%",
        "id": "btnNotif",
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
    flxNotif.add(imgNotif1, imgNotif2, btnNotif);
    var flxSetting = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "60%",
        "id": "flxSetting",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "3%",
        "skin": "slFbox",
        "width": "10%",
        "zIndex": 1
    }, {}, {});
    flxSetting.setDefaultUnit(kony.flex.DP);
    var imgSetting = new kony.ui.Image2({
        "height": "100%",
        "id": "imgSetting",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_setting.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnSetting = new kony.ui.Button({
        "focusSkin": "sknBtnRoundFocusAbu",
        "height": "100%",
        "id": "btnSetting",
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
    flxSetting.add(imgSetting, btnSetting);
    flxTitleBar.add(imgLogo, flxNotif, flxSetting);
    var flxProfil = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flxProfil",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxPutihTitleBorder",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxProfil.setDefaultUnit(kony.flex.DP);
    var imgDp = new kony.ui.Image2({
        "centerY": "50%",
        "height": "40dp",
        "id": "imgDp",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage",
        "src": "ic_profil.png",
        "width": "40dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var flxHello = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxHello",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "20%",
        "skin": "slFbox",
        "top": "0dp",
        "width": "75%",
        "zIndex": 1
    }, {}, {});
    flxHello.setDefaultUnit(kony.flex.DP);
    var lblHello = new kony.ui.Label({
        "height": "40%",
        "id": "lblHello",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLbl100HitamMedium",
        "text": "Hello Adri",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "15%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblInfo = new kony.ui.Label({
        "height": "40%",
        "id": "lblInfo",
        "isVisible": true,
        "left": "0%",
        "skin": "sknLbl100HitamMedium",
        "text": "Pagi yang cerah !",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxHello.add(lblHello, lblInfo);
    var flxGaris1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "2dp",
        "id": "flxGaris1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris1.setDefaultUnit(kony.flex.DP);
    flxGaris1.add();
    flxProfil.add(imgDp, flxHello, flxGaris1);
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "67%",
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var flxImg = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxImg",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImg.setDefaultUnit(kony.flex.DP);
    var imgBg = new kony.ui.Image2({
        "height": "100%",
        "id": "imgBg",
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "src": "ic_banguntidur.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImg.add(imgBg);
    var flxSudah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxSudah",
        "isVisible": false,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxSudah.setDefaultUnit(kony.flex.DP);
    var flxInfo = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxInfo",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxInfo.setDefaultUnit(kony.flex.DP);
    var lblInfoDevice = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblInfoDevice",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLbl100HitamMedium",
        "text": "Peralatan yang digunakan",
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
    flxInfo.add(lblInfoDevice);
    var flxListDevice = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxListDevice",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxListDevice.setDefaultUnit(kony.flex.DP);
    var flxLampu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxLampu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    flxLampu.setDefaultUnit(kony.flex.DP);
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
    var imgLampu = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgLampu",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_lampu.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRuang = new kony.ui.Label({
        "centerX": "45%",
        "height": "20%",
        "id": "lblRuang",
        "isVisible": true,
        "skin": "sknLblHitam80Reg",
        "text": "Ruang Tidur",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "65%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
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
    var flxOnOff = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxOnOff",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10%",
        "skin": "slFbox",
        "top": "3%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxOnOff.setDefaultUnit(kony.flex.DP);
    var imgOn = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOn",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_hidup.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgOff = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOff",
        "isVisible": false,
        "skin": "slImage",
        "src": "ic_mati.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOnOff.add(imgOn, imgOff);
    flxLampu.add(flxGaris6, imgLampu, lblRuang, flxGaris7, btnSore, flxOnOff);
    var flxSuhu = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxSuhu",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    flxSuhu.setDefaultUnit(kony.flex.DP);
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
    var imgSuhu = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgSuhu",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_termos.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRuang2 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRuang2",
        "isVisible": true,
        "skin": "sknLblHitam80Reg",
        "text": "Ruang Tidur",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "65%",
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
    var flxOnOff2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxOnOff2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10%",
        "skin": "slFbox",
        "top": "3%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxOnOff2.setDefaultUnit(kony.flex.DP);
    var imgOn2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOn2",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_hidup.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgOff2 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOff2",
        "isVisible": false,
        "skin": "slImage",
        "src": "ic_mati.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOnOff2.add(imgOn2, imgOff2);
    flxSuhu.add(flxGaris8, imgSuhu, lblRuang2, flxGaris9, btnSuhu, flxOnOff2);
    var flxJendela = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxJendela",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "28%",
        "zIndex": 1
    }, {}, {});
    flxJendela.setDefaultUnit(kony.flex.DP);
    var flxGaris10 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris10",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris10.setDefaultUnit(kony.flex.DP);
    flxGaris10.add();
    var imgJendela = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "50dp",
        "id": "imgJendela",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_jendela.png",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblRuang3 = new kony.ui.Label({
        "centerX": "50%",
        "id": "lblRuang3",
        "isVisible": true,
        "skin": "sknLblHitam80Reg",
        "text": "Ruang Tidur",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "65%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris11 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris11",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris11.setDefaultUnit(kony.flex.DP);
    flxGaris11.add();
    var btnJendela = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnJendela",
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
    var flxOnOff3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "flxOnOff3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "10%",
        "skin": "slFbox",
        "top": "3%",
        "width": "20%",
        "zIndex": 1
    }, {}, {});
    flxOnOff3.setDefaultUnit(kony.flex.DP);
    var imgOn3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOn3",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_hidup.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgOff3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "50%",
        "id": "imgOff3",
        "isVisible": false,
        "skin": "slImage",
        "src": "ic_mati.png",
        "width": "50%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxOnOff3.add(imgOn3, imgOff3);
    flxJendela.add(flxGaris10, imgJendela, lblRuang3, flxGaris11, btnJendela, flxOnOff3);
    flxListDevice.add(flxLampu, flxSuhu, flxJendela);
    flxSudah.add(flxInfo, flxListDevice);
    var flxBelum = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50%",
        "id": "flxBelum",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxBelum.setDefaultUnit(kony.flex.DP);
    var flxInfoBelum = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxInfoBelum",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxInfoBelum.setDefaultUnit(kony.flex.DP);
    var lblInfoBelum = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "lblInfoBelum",
        "isVisible": true,
        "skin": "sknLblMerah100Medium",
        "text": "Belum ada alat yang digunakan  !",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    flxInfoBelum.add(lblInfoBelum);
    var flxTambah = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "70%",
        "id": "flxTambah",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxTambah.setDefaultUnit(kony.flex.DP);
    var flxTambahAlat = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "80%",
        "id": "flxTambahAlat",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "sknFlxShadowWhite",
        "top": "0dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    flxTambahAlat.setDefaultUnit(kony.flex.DP);
    var flxGaris12 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxGaris12",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "skin": "sknFlxGaris15Persen",
        "top": "0dp",
        "width": "3dp",
        "zIndex": 1
    }, {}, {});
    flxGaris12.setDefaultUnit(kony.flex.DP);
    flxGaris12.add();
    var imgTambah = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "35%",
        "height": "65dp",
        "id": "imgTambah",
        "isVisible": true,
        "skin": "slImage",
        "src": "ic_plus.png",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var lblTambah = new kony.ui.Label({
        "centerX": "50%",
        "height": "20%",
        "id": "lblTambah",
        "isVisible": true,
        "skin": "sknLblHitam80Reg",
        "text": "Tambahkan Alat Baru",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "70%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flxGaris13 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "3dp",
        "id": "flxGaris13",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "sknFlxGaris18Persen",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxGaris13.setDefaultUnit(kony.flex.DP);
    flxGaris13.add();
    var btnTambah = new kony.ui.Button({
        "focusSkin": "sknBtnFokusMerah",
        "height": "100%",
        "id": "btnTambah",
        "isVisible": true,
        "left": "0dp",
        "onClick": AS_Button_a4cffafd014e4a719967be03175836a1,
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
    flxTambahAlat.add(flxGaris12, imgTambah, lblTambah, flxGaris13, btnTambah);
    flxTambah.add(flxTambahAlat);
    flxBelum.add(flxInfoBelum, flxTambah);
    flxIsi.add(flxImg, flxSudah, flxBelum);
    flxMain.add(flxTitleBar, flxProfil, flxIsi);
    var Beranda = new NavMenu.Beranda({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "id": "Beranda",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "masterType": constants.MASTER_TYPE_DEFAULT,
        "skin": "sknFlxMerah"
    }, {}, {});
    frmMainMenu.add(flxMain, Beranda);
};

function frmMainMenuGlobals() {
    frmMainMenu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmMainMenu,
        "enabledForIdleTimeout": false,
        "id": "frmMainMenu",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "sknForm"
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