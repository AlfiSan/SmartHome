function txtPassword_Start(eventobject, x, y) {
    return AS_TextField_f49656fbbe194ccdad3c9891ddfe08ac(eventobject, x, y);
}

function AS_TextField_f49656fbbe194ccdad3c9891ddfe08ac(eventobject, x, y) {
    function MOVE_ACTION____c60e8fcb775149beb975637cd00837e4_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "-10%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {
        "animationEnd": MOVE_ACTION____c60e8fcb775149beb975637cd00837e4_Callback
    });
}