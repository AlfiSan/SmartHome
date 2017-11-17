function txtPassword_BeginEdit(eventobject, changedtext) {
    return AS_TextField_gda4469386f84f479131fe9d358233d2(eventobject, changedtext);
}

function AS_TextField_gda4469386f84f479131fe9d358233d2(eventobject, changedtext) {
    function MOVE_ACTION____a9da4c51a79b4bc8969f9386eeb42219_Callback() {}
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
        "animationEnd": MOVE_ACTION____a9da4c51a79b4bc8969f9386eeb42219_Callback
    });
}