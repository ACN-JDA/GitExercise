/*global QUnit*/

sap.ui.define([
	"zbtp/day5exercise2atienza/controller/day5exercise2_atienza.controller"
], function (Controller) {
	"use strict";

	QUnit.module("day5exercise2_atienza Controller");

	QUnit.test("I should test the day5exercise2_atienza controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
