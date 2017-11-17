define(function() {
    return function(controller) {
        var Menu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "Menu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxPutihTitleBorder",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Menu.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerX": "46.88%",
            "centerY": "50.00%",
            "height": "80%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLblMerah150Bold",
            "text": "Peralatan",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxTambah = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxTambah",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxTambah.setDefaultUnit(kony.flex.DP);
        var imgPlus = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "40dp",
            "id": "imgPlus",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_plus.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnTambah = new kony.ui.Button({
            "focusSkin": "sknBtnTransparanRound",
            "height": "100%",
            "id": "btnTambah",
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
        flxTambah.add(imgPlus, btnTambah);
        var flxGaris = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxGaris",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxGaris25Persen",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGaris.setDefaultUnit(kony.flex.DP);
        flxGaris.add();
        Menu.add(lblTitle, flxTambah, flxGaris);
        return Menu;
    }
})