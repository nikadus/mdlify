// Nicholas Melchert
(function ($) {

	$.fn.mdlify = function (options) {				// define a jQuery plugin called `mdlify'

		var settings = $.extend({					// define default settings; update with given options
			labelText: "Enter something here...",
			textFieldType: "singleLine",
			helperText: "",
			
		}, options);

		var textField;

		if (settings.textFieldType === "singleLine") {
			textField = $('<input/>', { 'class': 'mdl-textfield__input', type: 'text' });
		} else if (settings.textFieldType === "multiLine") {
			textField = $('<textarea/>', { 'class': 'mdl-textfield__input', type: 'text', rows: 3});
		}

		return this
			.before(
				$('<div/>', { 'class': 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label'}).append(
					textField,
					$('<label/>', { 'class': 'mdl-textfield__label', text: settings.labelText}), // sets the label text
					
					$('<errorText/>', { 'class': 'mdl-textfield__errorText', text: settings.helperText}), // set error text
					
					
				)
			)
			.remove();
	};

}(jQuery));		// end