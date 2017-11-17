function txtUsername_Start(eventobject, x, y) {
    return AS_TextField_a5b914fd74214f28862aae27098f6258(eventobject, x, y);
}

function AS_TextField_a5b914fd74214f28862aae27098f6258(eventobject, x, y) {
    function MOVE_ACTION____h1cfcc6cae564c1ca4e32e8196168680_Callback() {}
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
        "animationEnd": MOVE_ACTION____h1cfcc6cae564c1ca4e32e8196168680_Callback
    });
}