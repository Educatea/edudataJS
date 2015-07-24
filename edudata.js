/*!
 * EduDataJS v0.0.1
 * https://github.com/Educatea/edudataJS
 *
 * Copyright 2015, Educación Digital Adaptativa S.A.
 * Released under the MIT license
 */


// This is the main function.
// To start using it, first you have to run the 'start' action.
// After that you can use the 'track' action to track anything.
function ed(options) {
	options = options || {};
	switch(options.action) {

    case 'start':

        // ed({ action: "start", token: "TOKEN", host: "HOST-NAME"});

        // Set the token as cookie.
        localStorage.setItem("edutoken", options.token);

		// Set the host as cookie.
		localStorage.setItem("host", options.host);

		return true;

        break;

    case 'track':
    	
    	// ed({ action: "track", tag: "TAG-NAME", values: [ARRAY-OF-VALUES], unit: "UNIT" });

    	// Let's get all the variables from options.
    	tag = options.tag;
    	unit = options.unit;
    	values = options.values;

		// Check if there is a tag. If there's no tag send an error.
		if (typeof tag == 'undefined' || tag == '') {
	    	console.error('Undefined tag');
	    	return false;
		}

		// If there's no unit, make sure to send an empty string.
		if (typeof unit == 'undefined' || unit == '') {
	    	unit = ''
		}

		// Values has to be an array.
		if (!$.isArray(values)) {

			// If it's just one integer we'll forgive you and make the array for you.
			if($.isNumeric(values)){
				values = [values]
			}else{
				console.error('Values should be an Array!');
	    		return false;
			}
		}

		// Get the Token and Host from Cookies.
		token = localStorage.getItem("edutoken");
		host = localStorage.getItem("host");

		// Check if there is a token. If there's no token send an error.
		if (typeof token == 'undefined' || token == '') {
	    	console.error('Undefined token');
	    	return false;
		}

		// Check if there is a host. If there's no host send 'WebBrowser'.
		if (typeof host == 'undefined' || host == '') {
	    	host = 'WebBrowser'
		}

		// Finally let's make the call.
		var url = "http://data.educatea.com.ar/api/v1/measurements"; // EduData endpoint.
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
        break;

    default:
        console.log('Please specify an action.');
	}
};

// This is a tracker listener.
// This will listen to every click made to a button or link.
// You can add other HTML tags as well.
// The tags need to have the following attributes:
// data-track="true"
// data-track-tag="TAG-NAME"
// data-track-value="INTEGER"

$('button, a').on('click', function(){ 
	// We'll see if the tracking is on.
	track = $(this).attr('data-track');
  
	if(track == 'true'){
		// Okay, we need to track this.

		// Let's get all the data we need.
		value = $(this).attr('data-track-value');
		tag =  $(this).attr('data-track-tag');
		unit =  $(this).attr('data-track-unit');

		// Get the Token and Host from Cookies.
		token = localStorage.getItem("edutoken");
		host = localStorage.getItem("host");


		// Let's validate so we don't get any errors.

		// Check if there is a tag. If there's no tag send an error.
		if (typeof tag == 'undefined' || tag == '') {
	    	console.error('Undefined tag');
	    	return false;
		}

		// If there's no unit, make sure to send an empty string.
		if (typeof unit == 'undefined' || unit == '') {
	    	unit = ''
		}

		//Let's make sure the value is an integer and make it an array
		if($.isNumeric(value)){
			value = [parseInt(value)]
		}else{
			console.error('Value should be an integer!');
	    	return false;
		}

		// Now we will send the data
		var url = "http://data.educatea.com.ar/api/v1/measurements"; // EduData endpoint.
		$.ajax({
			dataType: "json",
			data: { token: token, tag: tag, values: value, unit: unit, host: host },
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
  
});

// Make an array unique.
Array.prototype.unique = function(){
    var tmp = {}, out = [];
    for(var i = 0, n = this.length; i < n; ++i){
        if(!tmp[this[i]]) { tmp[this[i]] = true; out.push(this[i]); }
    }
    return out;
}

// Code to run some A/B Tests.
// To run this just add a normal tracker to the element
// And a 'data-ab-test' attribute with the name of the test.
// Remeber to use the same name for tested elemnts and only with 2 elements.

// Let's create an array to contain all the tests.
ab_tests = [];

// Now let's find those tests.
$('[data-ab-test]').each(function() {
	// Push 'em into the array.
	ab_tests.push($(this).attr('data-ab-test'));
});

// Delete repeated with our .unique() helper.
ab_tests = ab_tests.unique();

// Now we'll iterate the tests.
$.each( ab_tests, function( index, value ){
	// We need to make sure there are only 2 elements being tested.
	if($("[data-ab-test='"+value+"']").length == 2){
		// And hide a random one of the two.
		$("[data-ab-test='"+value+"']:eq("+(Math.floor((Math.random() * 2) + 1) -1)+")").hide();
	}
});