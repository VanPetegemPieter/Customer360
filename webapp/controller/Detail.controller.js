sap.ui.define([
	"com/delaware/pvp/trac2019/controller/BaseController",
	"sap/ui/model/Filter",
	"com/delaware/pvp/trac2019/model/Formatter"
], function (Controller, Filter, Formatter) {
	"use strict";

	return Controller.extend("com.delaware.pvp.trac2019.controller.Detail", {
		formatter: Formatter,
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.pvp.trac2019.view.Detail
		 */
		onInit: function () {
			this.getRouter().getRoute("Detail").attachPatternMatched(this._onRoutingMatched, this);
		},
		
		_onRoutingMatched: function(oEvent){
			var that = this;
			var aFilters = [new Filter("Customer", sap.ui.model.FilterOperator.EQ, oEvent.getParameter("arguments").customerID)];
			
			this.getModel("orders").read("/ZV_ZVT19_ORDERS_PVP", {
				filters:aFilters,
				success: function(oData) {
					that.getModel("ordersModel").setData(oData.results);
				},
				error: function(oError) {
					that.showError(oError);
				}
			});
		},
		
		onOrderPress: function(oEvent){
			var oSelectedSalesDoc = oEvent.getSource().getSelectedItem().getBindingContext("ordersModel").getObject();
			this.getModel("selectedSalesDocModel").setData(oSelectedSalesDoc);
			this.getRouter().navTo("OrderLines", {
				customerID: oSelectedSalesDoc.customer,
				orderNumber: oSelectedSalesDoc.OrderNumber
			});
			
			this.getModel("appView").setProperty("/layout", "ThreeColumnsEndExpanded");
			
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.pvp.trac2019.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.pvp.trac2019.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.pvp.trac2019.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});