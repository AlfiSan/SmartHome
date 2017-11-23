function addWidgetsalertPopUp() {
    var lblTitle = new kony.ui.Label({
        "id": "lblTitle",
        "isVisible": true,
        "skin": "sknLblPutih120Bold",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var linePopUp = new kony.ui.Line({
        "id": "linePopUp",
        "isVisible": true,
        "skin": "sknLinePopUp"
    }, {
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "thickness": 1
    }, {});
    var TxtIsiLabel = new kony.ui.Label({
        "id": "TxtIsiLabel",
        "isVisible": true,
        "skin": "sknLblPutih120Reg",
        "text": "Isi Alert ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        }
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "hExpand": true,
        "margin": [1, 10, 1, 1],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": true,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "textCopyable": false
    });
    var btnOk = new kony.ui.Button({
        "focusSkin": "sknBtnRoundFocusAbu",
        "id": "btnOk",
        "isVisible": true,
        "onClick": AS_Button_a13c27371a3040f28e9b78db3de968a2,
        "skin": "sknBtnRoundWhite",
        "text": "OK"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 20, 6, 6],
        "marginInPixel": false,
        "padding": [4, 4, 4, 4],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_BOTTOM_CENTER
    }, {});
    alertPopUp.add(lblTitle, linePopUp, TxtIsiLabel, btnOk);
};

function alertPopUpGlobals() {
    alertPopUp = new kony.ui.Popup({
        "addWidgets": addWidgetsalertPopUp,
        "id": "alertPopUp",
        "isModal": false,
        "skin": "sknPopUp",
        "transparencyBehindThePopup": 70
    }, {
        "containerHeight": 0,
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 80,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "windowSoftInputMode": constants.POPUP_ADJUST_PAN
    });
};