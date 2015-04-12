(function() {

	$(document).ready(function() {
		mixpanel.track_forms("#subForm", "invite form submission");
		mixpanel.track("viewed invite page");
	});

})();