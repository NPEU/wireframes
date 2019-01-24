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

    var reserachSearch = {
        run: function() {
            //console.log(window.location);
            if (/research\/projects\/?\?rs=/.test(window.location.href)) {
                //console.log('Matched');
                document.getElementById('filter_box').insertAdjacentHTML('afterend', '<p>Showing results for <b>"' + window.location.search.replace('?rs=', '') + '"</b>.</p>');
            }
        }
    }

    ready(reserachSearch.run);
})();
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

            if (existingIndex >= 0) {
                classes.splice(existingIndex, 1);
            } else {
                classes.push(className);
                el.className = classes.join(' ');
            }
        }
    }
    
    var hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
        }
    }

    var addClass = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }
    
    var removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
    
	var wireframe = {

        init: function() {
            var hero_img = document.querySelector('#hero .js-toggle-image');
            var n = 1;
            // Add class toggle.
            if (hero_img) {
                hero_img.addEventListener('click', function(){
                    console.log(hasClass(this, 'show-image'));
                    if (hasClass(this, 'show-image')) {
                        removeClass(this, 'show-image');
                        removeClass(this, 'show-image-' + n);
                        if (n == 4) {
                            n = 1;
                        } else {
                            n++;
                        }
                    } else {
                        addClass(this, 'show-image');
                        addClass(this, 'show-image-' + n);
                    }                  
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
