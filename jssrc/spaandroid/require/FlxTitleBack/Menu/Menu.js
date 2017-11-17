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
        var flxGaris = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxGaris",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxGaris30Persen",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGaris.setDefaultUnit(kony.flex.DP);
        flxGaris.add();
        var flxBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "18%",
            "zIndex": 1
        }, {}, {});
        flxBack.setDefaultUnit(kony.flex.DP);
        var imgBack = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "35dp",
            "id": "imgBack",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_back.png",
            "width": "45dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnBack = new kony.ui.Button({
            "focusSkin": "sknBtnTransparanRound",
            "height": "100%",
            "id": "btnBack",
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
        flxBack.add(imgBack, btnBack);
        var lblTitle = new kony.ui.Label({
            "centerX": "46.88%",
            "centerY": "50.00%",
            "height": "80%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLblMerah150Bold",
            "text": "Peralatan",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        Menu.add(flxGaris, flxBack, lblTitle);
        return Menu;
    }
})