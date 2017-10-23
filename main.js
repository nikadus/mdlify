(function() {

	$('input')						// select all of the input elements..
		.mdlify({					// invoke mdlify() plugin for all selected elements
			labelText: "Click me!", // override default labelText option
			textFieldType: "singleLine", // override default multiLine option
			helperText: "Enter something above!", // helperText

		});

}());
