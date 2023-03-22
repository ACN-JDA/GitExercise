/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zbtp/day5exercise2atienza/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
