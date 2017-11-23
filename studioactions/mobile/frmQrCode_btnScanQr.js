function frmQrCode_btnScanQr(eventobject) {
    return AS_Button_b991c6ca7ec643bd99ff44debb30d607(eventobject);
}

function AS_Button_b991c6ca7ec643bd99ff44debb30d607(eventobject) {
    function onScanComplete(result) {
        PopAlert(true, "Result", JSON.stringify(result));
        //   alert(JSON.stringify(result));
        frmPeralatan.show();
    }
    qrScan.scanNow(onScanComplete);
}