function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZV_ZVT19_ORDERS_PVP_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}