function benchmark (token, tag, host, values, unit) {
	if (typeof token == 'undefined' || token == '') {
    	console.error('Undefined token');
    	return false;
	}
	if (typeof tag == 'undefined' || tag == '') {
    	console.error('Undefined tag');
    	return false;
	}
	if (typeof host == 'undefined' || host == '') {
    	host = 'WebBrowser'
	}
	if (typeof unit == 'undefined' || unit == '') {
    	unit = ''
	}
	if (!$.isArray(values)) {
		console.error('Values should be an Array!');
    	return false;
	}
	var url = "http://data.edudata.com.ar/api/v1/measurements"; // EduData endpoint.
	$.ajax({
	dataType: "json",
	data: { token: token, tag: tag, values: values, unit: unit, host: host },
	type: "POST",
	url: url,
	success: function(data) {
	  return true;
	},
	error: function(e) {
	  return false;
	},
	timeout: function() {
	  return false;
	}
	});
}