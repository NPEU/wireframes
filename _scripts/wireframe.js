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
            var hero_img = document.querySelector('#hero .js-toggle-image');
            // Add class toggle.
            if (hero_img) {
                hero_img.addEventListener('click', function(){
                    toggleClass(this, 'show-image');
                });
            }

            var important_ctas = document.querySelector('#important-ctas.js-hide');
            // Add class toggle.
            if (important_ctas) {
                important_ctas.addEventListener('click', function(){
                    important_ctas.style.display = 'none';
                });
            }
            
            var filter_box = document.querySelector('#filter_box.js-hide');
            // Add filter_box toggle.
            if (filter_box) {
                var filter_box_trigger = document.querySelector('#filter_box .js-trigger');
                filter_box_trigger.addEventListener('click', function(){
                    //filter_box.style.display = 'none';
                    
                    var next = filter_box.nextElementSibling;
                    var t = next.innerHTML;

                    filter_box.previousElementSibling.insertAdjacentHTML('beforeend', t);
                    filter_box.parentNode.removeChild(next);
                    filter_box.parentNode.removeChild(filter_box);
                });
            }
            
            var research_img = document.querySelector('#our-research .js-toggle-image');
            // Add class toggle.
            if (research_img) {
                research_img.addEventListener('click', function(){
                    toggleClass(this, 'show-image');
                });
            }
            
            var ppi_img = document.querySelector('#participant-involvement .js-toggle-image');
            // Add class toggle.
            if (ppi_img) {
                ppi_img.addEventListener('click', function(){
                    toggleClass(this, 'show-image');
                });
            }
            
            var team_img = document.querySelector('#npeu-team .js-toggle-image');
            // Add class toggle.
            if (team_img) {
                team_img.addEventListener('click', function(){
                    toggleClass(this, 'show-image');
                });
            }
        }
	}

	ready(wireframe.init);
})();
