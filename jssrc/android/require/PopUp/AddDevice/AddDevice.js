define(function() {
    return function(controller) {
        var AddDevice = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "60dp",
            "id": "AddDevice",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "sknFlxPutihTitleBorder",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        AddDevice.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblTitle",
            "isVisible": true,
            "skin": "sknLbl100HitamBold",
            "text": "Pilihan",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxKeluar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxKeluar",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 1
        }, {}, {});
        flxKeluar.setDefaultUnit(kony.flex.DP);
        var lblX = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "lblX",
            "isVisible": true,
            "skin": "sknLbl280X",
            "text": "x",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnKeluar = new kony.ui.Button({
            "focusSkin": "sknBtnRoundFocusAbu",
            "height": "100%",
            "id": "btnKeluar",
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
        flxKeluar.add(lblX, btnKeluar);
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
        AddDevice.add(lblTitle, flxKeluar, flxGaris);
        return AddDevice;
    }
})