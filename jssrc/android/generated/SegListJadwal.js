function initializeSegListJadwal() {
    flxRowJadwal = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "25%",
        "id": "flxRowJadwal",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox"
    }, {}, {});
    flxRowJadwal.setDefaultUnit(kony.flex.DP);
    var flxNama = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "flxNama",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1
    }, {}, {});
    flxNama.setDefaultUnit(kony.flex.DP);
    var lblJam = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "lblJam",
        "isVisible": true,
        "left": "5%",
        "skin": "sknLbl120HitamReg",
        "text": "24.00",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblIdDevice = new kony.ui.Label({
        "centerY": "50%",
        "height": "50%",
        "id": "lblIdDevice",
        "isVisible": true,
        "left": "40%",
        "skin": "sknLbl120HitamReg",
        "text": "Lampu Aktif",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "55%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var btnSelect = new kony.ui.Button({
        "focusSkin": "sknBtnTransparanFokus",
        "height": "100%",
        "id": "btnSelect",
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
    flxNama.add(lblJam, lblIdDevice, btnSelect);
    var switchOn = new kony.ui.Switch({
        "centerY": "50%",
        "height": "45%",
        "id": "switchOn",
        "isVisible": true,
        "left": "0%",
        "leftSideText": "ON",
        "rightSideText": "OFF",
        "selectedIndex": 0,
        "skin": "sknSwitchMerah",
        "width": "28%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxRowJadwal.add(flxNama, switchOn);
}