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
    
    var toggleClass = function (el, className) {
        if (el.classList) {
          el.classList.toggle(className);
        } else {
          var classes = el.className.split(' ');
          var existingIndex = classes.indexOf(className);

          if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
          else
            classes.push(className);

          el.className = classes.join(' ');
        }
    }   

	var wireframe = {

        init: function() {
            var hero_img = document.querySelector('.js-toggle-image-1');
            // Add class toggle.
            hero_img.addEventListener('click', function(){
                toggleClass(this, 'show-image');
            });
            
        }
	}

	ready(wireframe.init);
})();
