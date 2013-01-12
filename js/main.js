(function() {

	$(document).ready(function() {
		$("#parallax .parallax-layer")
		.parallax({
		  mouseport: $(".wrapper")
		});
		
		mixpanel.track_forms("#subForm", "invite form submission");
	});

})();