function btnShow_UntukHide(eventobject) {
    return AS_Button_d0b091294e874aa7bf0d2d050965214d(eventobject);
}

function AS_Button_d0b091294e874aa7bf0d2d050965214d(eventobject) {
    frmLogin.txtPassword.text = frmLogin.txtPassText.text;
    frmLogin.btnHide.setVisibility(true);
    frmLogin.btnShow.setVisibility(false);
    frmLogin.txtPassword.setVisibility(true);
    frmLogin.txtPassText.setVisibility(false);
}