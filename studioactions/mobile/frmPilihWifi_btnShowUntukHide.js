function frmPilihWifi_btnShowUntukHide(eventobject) {
    return AS_Button_fae37848a0714b639f59b016a262f08d(eventobject);
}

function AS_Button_fae37848a0714b639f59b016a262f08d(eventobject) {
    frmPilihWifiDevice.txtPassword.text = frmPilihWifiDevice.txtPassText.text;
    frmPilihWifiDevice.btnHide.setVisibility(true);
    frmPilihWifiDevice.btnShow.setVisibility(false);
    frmPilihWifiDevice.txtPassword.setVisibility(true);
    frmPilihWifiDevice.txtPassText.setVisibility(false);
}