/*
*/
(function() {
    var ready = function(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

	var wireframe = {

        init: function() {
            var hero_img = document.querySelector('#index');
            // Add class toggle.
        }
	}

	ready(wireframe);
})();
