sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/core/UIComponent"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, UIComponent) {
        "use strict";

        return Controller.extend("sapips.training.employeeapp.controller.ViewEmployee", {
            onInit: function () {

            },

            onNavBack: function () {
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
      
                if (sPreviousHash && sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("EmployeeList".true);
                }
            },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });