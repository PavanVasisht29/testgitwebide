jQuery.sap.declare("ui.Component");
sap.ui.getCore().loadLibrary("sap.ui.generic.app");
jQuery.sap.require("sap.ui.generic.app.AppComponent");

sap.ui.generic.app.AppComponent.extend("ui.Component", {
	metadata: {
		"manifest": "json"
	}
});