function txtUser_Begin(eventobject, changedtext) {
    return AS_TextField_a08a17f727574c7f838371bffbc38a68(eventobject, changedtext);
}

function AS_TextField_a08a17f727574c7f838371bffbc38a68(eventobject, changedtext) {
    function MOVE_ACTION____c9a1efb1c8d04c80a527b755f451f8da_Callback() {}
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
        "animationEnd": MOVE_ACTION____c9a1efb1c8d04c80a527b755f451f8da_Callback
    });
}