sap.ui.define([
	"com/delaware/pvp/trac2019/controller/BaseController"
], function (Controller) {
	"use strict";

	return Controller.extend("com.delaware.pvp.trac2019.controller.OrderLines", {
	
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.pvp.trac2019.view.OrderLines
		 */
		onInit: function () {
			this.getRouter().getRoute("OrderLines").attachPatternMatched(this._onRouteMatched, this);
		},
		
		onRouteMatched: function(oEvent){
			var that = this;
			
			var sOrderNumber = oEvent.getParameter("arguments").orderNumber;
			this.getModel("orderItems").read("/OrderSet(SalesDocument='" + sOrderNumber + "')",{
				urlParameters:{
					$expand:"NavOrderItems"
				},
				success:function(oData){
					that.getModel("orderItemsModel").setData(oData.NavOrderItems.results); 
				},
				error: function(oError){
					that.showError(oError);
				}
			});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.pvp.trac2019.view.OrderLines
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.pvp.trac2019.view.OrderLines
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.pvp.trac2019.view.OrderLines
		 */
		//	onExit: function() {
		//
		//	}

	});

});