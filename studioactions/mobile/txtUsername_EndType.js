function txtUsername_EndType(eventobject, changedtext) {
    return AS_TextField_f821c3bdb807485cabe09491201c9ef1(eventobject, changedtext);
}

function AS_TextField_f821c3bdb807485cabe09491201c9ef1(eventobject, changedtext) {
    function MOVE_ACTION____ee8357ae68ed4d4581ddff75b06a2fb8_Callback() {}
    frmLogin.flxMain.animate(kony.ui.createAnimation({
        "100": {
            "top": "0dp",
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
        "animationEnd": MOVE_ACTION____ee8357ae68ed4d4581ddff75b06a2fb8_Callback
    });
}