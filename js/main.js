(function() {

	$(document).ready(function() {
		$("#parallax .parallax-layer")
		.parallax({
		  mouseport: $(".wrapper"),
		  decay: 0.3
		});
		
		mixpanel.track_forms("#subForm", "invite form submission");
	});

})();