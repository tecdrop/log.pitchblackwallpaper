(function() {
    'use strict';

    function shuffle() {
        // Randomize the order of all quotes, using a Fisher–Yates shuffle
        // based on http://stackoverflow.com/a/11972692/220039
        var quotes = document.querySelector('.tqc-quotes');
        for (var i = quotes.children.length; i >= 0; i--) {
            quotes.appendChild(quotes.children[Math.random() * i | 0]);
        }

        // Make sure the first quote is always a (random) favorite quote
        // var favQuotes = document.querySelectorAll('.tqc-fav');
        // quotes.insertBefore(favQuotes[Math.random() * favQuotes.length | 0], quotes.firstChild);
    }

    function updateCounters() {
        var reviewCounter = document.querySelectorAll('.tqc-review').length;
        var testimonialCounter = document.querySelectorAll('.tqc-testimonial').length;
        document.getElementById('review-counter').textContent = reviewCounter;
        document.getElementById('testimonial-counter').textContent = testimonialCounter;
        document.getElementById('total-counter').textContent = reviewCounter + testimonialCounter;
    }

    // document.getElementById('shuffle-icon').onclick = function(event) { shuffle(); };

    shuffle();
    updateCounters();

})();
