function addWidgetsfrmLampu() {
    frmLampu.setDefaultUnit(kony.flex.DP);
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
    Menu.btnBack.onClick = AS_Button_d78fd06473544daa8fcc26687102d72e;
    Menu.lblTitle.text = "Lampu";
    var flxIsi = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "60dp",
        "clipBounds": true,
        "id": "flxIsi",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxIsi.setDefaultUnit(kony.flex.DP);
    var segNamaList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "btnSelect": "",
            "imgDevice": "imagedrag.png",
            "lblIdDevice": "Lampu 1A",
            "switchOn": {
                "selectedIndex": 0
            }
        }, {
            "btnSelect": "",
            "imgDevice": "imagedrag.png",
            "lblIdDevice": "Lampu 1B",
            "switchOn": {
                "selectedIndex": 0
            }
        }, {
            "btnSelect": "",
            "imgDevice": "imagedrag.png",
            "lblIdDevice": "Lampu 1C",
            "switchOn": {
                "selectedIndex": 0
            }
        }],
        "groupCells": false,
        "height": "100%",
        "id": "segNamaList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_bd11931ac12f4fa4abb6f4fdc0aee235,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "segTransparan",
        "rowTemplate": flxRowList,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646449",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "btnSelect": "btnSelect",
            "flxNama": "flxNama",
            "flxRowList": "flxRowList",
            "imgDevice": "imgDevice",
            "lblIdDevice": "lblIdDevice",
            "switchOn": "switchOn"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIsi.add(segNamaList);
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
    frmLampu.add(flxMain);
};

function frmLampuGlobals() {
    frmLampu = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmLampu,
        "enabledForIdleTimeout": false,
        "id": "frmLampu",
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