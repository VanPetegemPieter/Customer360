sap.ui.define([
	"com/delaware/pvp/trac2019/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.delaware.pvp.trac2019.controller.App", {
		onInit: function(){
			this.getModel("appView").setProperty("/layout", "OneColumn");
		}
	});
});