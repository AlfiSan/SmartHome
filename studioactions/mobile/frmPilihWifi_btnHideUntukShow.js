function frmPilihWifi_btnHideUntukShow(eventobject) {
    return AS_Button_a346c7003f3048f089083c787a914250(eventobject);
}

function AS_Button_a346c7003f3048f089083c787a914250(eventobject) {
    frmPilihWifiDevice.txtPassText.text = frmPilihWifiDevice.txtPassword.text;
    frmPilihWifiDevice.btnHide.setVisibility(false);
    frmPilihWifiDevice.btnShow.setVisibility(true);
    frmPilihWifiDevice.txtPassword.setVisibility(false);
    frmPilihWifiDevice.txtPassText.setVisibility(true);
}