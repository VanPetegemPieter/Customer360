sap.ui.define([
	"sap/ui/core/format/DateFormat"
], function (DateFormat) {
	"use strict";
	
	return {
		
		formatDate: function(dDate){
			var oInstance = DateFormat.getInstance();
			return oInstance.format(dDate);
		},
		
		addLeadingZeroes: function(sValue){
			return "00" + sValue;
		}
			
	};
});