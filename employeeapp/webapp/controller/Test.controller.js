sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/library",
    "sap/m/test"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageToast, coreLibrary, Dialog, Button, mobileLibrary, Text) {
        "use strict";

        var ButtonType = mobileLibrary.ButtonType;

        var DialogType = mobileLibrary.DialogType;

        var ValueState = coreLibrary.ValueState;

        return Controller.extend("sapips.training.employeeapp.controller.EmployeeList", {
            onInit: function () {

            },

            onAddEmployee: function() {
                var oView = this.getView();
                this.getRouter().navTo("CreateEmployee");

            },

            onDeleteEmployee: function() {
                var oTable = this.getView().byID( "idEmployeeTable")
                var vItems = oTable.getSelectedItems();

                if(vItems.length>1){
                    this.onErrorMessageDialogPress();
                }else{
                    this.onConfirmDelete();
                }
            },

            onViewEmployee: function() {   
                var oView = this.getView();
                this.getRouter().navTo("ViewEmployee");
            },

            getRouter: function() {
                return sap.ui.core.UIComponent.getRouterFor(this);
            },

        });
    });
