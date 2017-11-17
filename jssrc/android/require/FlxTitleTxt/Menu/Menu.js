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
            "skin": "sknFlxGaris25Persen",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxGaris.setDefaultUnit(kony.flex.DP);
        flxGaris.add();
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
        Menu.add(flxGaris, lblTitle);
        return Menu;
    }
})