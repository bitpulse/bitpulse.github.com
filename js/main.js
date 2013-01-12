(function() {

	$(document).ready(function() {
		$("#parallax .parallax-layer")
		.parallax({
		  mouseport: $("#parallax")
		});
		
		mixpanel.track_forms("#subForm", "invite form submission");
	});

})();