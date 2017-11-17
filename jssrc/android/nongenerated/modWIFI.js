//Type your code here
var KonyMain = java.import("com.konylabs.android.KonyMain");
var context = KonyMain.getActivityContext();

function getWifiModule() {
    var ERR_WIFI_NOT_WPA = 1;
    var ERR_CONFIG_WIFI = 2;
    var ERR_CANNOT_DISCONNECT = 3;
    var ERR_CANNOT_CONNECT = 4;
    var ERR_SSID_NOT_FOUND = 5;
    var KonyMain = java.import('com.konylabs.android.KonyMain');
    var WifiManager = java.import('android.net.wifi.WifiManager');
    var Context = java.import('android.content.Context');
    var List = java.import('java.util.List');
    var ScanResult = java.import('android.net.wifi.ScanResult');
    var WifiConfiguration = java.import('android.net.wifi.WifiConfiguration');
    var context1 = KonyMain.getActivityContext();
    var wifi = context1.getSystemService(Context.WIFI_SERVICE);

    function isEnabled() {
        return wifi.isWifiEnabled();
    }

    function setEnabled(enabled) {
        wifi.setWifiEnabled(enabled);
    }

    function loadWifiList() {
        var scanResults = wifi.getScanResults();
        var results = [];
        var arrList = [];
        for (var i = 0; i < scanResults.size(); i++) {
            results.push({
                SSID: scanResults.get(i).SSID,
                BSSID: scanResults.get(i).BSSID,
                capabilities: scanResults.get(i).capabilities,
                frequency: scanResults.get(i).frequency,
                level: scanResults.get(i).level,
                timestamp: scanResults.get(i).timestamp
            });
            //if(scanResults.get(i).SSID.substr(0, 6)=="MODEGI"){
            arrList[i] = [scanResults.get(i).SSID, scanResults.get(i).SSID];
            //}
        }
        //alert(JSON.stringify(arrList));
        //frmPilihAlatDariWifi.lbxPilihAlat.masterData = arrList;
        //frmMain.lstSSID.masterData = arrList;
        //frmPilihAlatDariWifi.show();
        return {
            hasil: arrList,
            results: results
        };
    }

    function connect(ssid, password) {
        var scanResults = loadWifiList();
        var connected = ERR_SSID_NOT_FOUND;
        for (var i = 0; i < scanResults.length; i++) {
            if (ssid === scanResults[i].SSID) {
                connected = connectTo(scanResults[i], password);
            }
        }
        return connected;
    }

    function connectTo(ssidInfo, password) {
        var conf = new WifiConfiguration();
        conf.SSID = '"' + ssidInfo.SSID + '"';
        conf.BSSID = ssidInfo.BSSID;
        if (ssidInfo.capabilities.indexOf('WPA') >= 0) {
            conf.preSharedKey = '"' + password + '"';
        } else {
            // Batalkan jika SSID tidak menggunakan WPA password
            return ERR_WIFI_NOT_WPA;
        }
        var wifiConfigList = wifi.getConfiguredNetworks();
        var updateNetwork = -1;
        for (var i = 0; i < wifiConfigList.size(); i++) {
            var wifiConfig = wifiConfigList.get(i);
            if (wifiConfig.SSID === conf.SSID) {
                conf.networkId = wifiConfig.networkId;
                updateNetwork = wifi.updateNetwork(conf);
            }
        }
        if (updateNetwork === -1) {
            // Jika belum terkonfigurasi, tambah configurasi
            updateNetwork = wifi.addNetwork(conf);
        }
        if (updateNetwork === -1) {
            // Batalkan jika tidak bisa terkonfig
            return ERR_CONFIG_WIFI;
        }
        var disconnected = wifi.disconnect();
        if (!disconnected) {
            // Batalkan jika tidak bisa disconnect wifi sebelumnya
            return ERR_CANNOT_DISCONNECT;
        }
        var enableNetwork = wifi.enableNetwork(updateNetwork, true);
        if (!enableNetwork) {
            // Tidak bisa terkoneksi
            return ERR_CANNOT_CONNECT;
        }
        return 0;
    }

    function disconnect() {
        wifi.disconnect();
    }
    return {
        isEnabled: isEnabled,
        setEnabled: setEnabled,
        loadWifiList: loadWifiList,
        connect: connect,
        disconnect: disconnect
    };
}

function checkWifi() {
    var wifi = getWifiModule();
    var wlist = wifi.loadWifiList();
    //var daftar = wlist.hasil;
    //alert(wlist);
    //frmPilihAlatDariWifi.show();
    frmPilihAlatDariWifi.lbxPilihAlat.masterData = wlist.hasil;
    frmPilihAlatDariWifi.show();
    //alert(JSON.stringify(wifi.loadWifiList()));
}

function checkWifi2() {
    var wifi = getWifiModule();
    var wlist = wifi.loadWifiList();
    //var daftar = wlist.hasil;
    //alert(wlist);
    //frmPilihAlatDariWifi.show();
    frmPilihWifiDevice.lbxPilihWifiDevice.masterData = wlist.hasil;
    frmPilihWifiDevice.show();
    //alert(JSON.stringify(wifi.loadWifiList()));
}

function sambungWifi(ssid, pass) {
    var wifi = getWifiModule();
    var koneksi = wifi.connect(ssid, pass);
    var dev_url = "http://192.168.4.1/sn";
    var request = new kony.net.HttpRequest();
    request.open(constants.HTTP_METHOD_GET, dev_url, false);
    request.send();
    kony.application.dismissLoadingScreen();
    //alert(request.response);
    var result = JSON.parse(request.response);
}