// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/


function setUpStarRating() {
    for (const ratingDiv of $('.star-rating')) {

        function updateRating() {
            const ratingValue = parseInt(ratingDiv.querySelector('input.rating-value').value);

            for (const icon of ratingDiv.querySelectorAll('.fa')) {
                if (ratingValue >= $(icon).data('rating')) {
                    $(icon).removeClass('fa-star-o').addClass('fa-star');
                } else {
                    $(icon).removeClass('fa-star').addClass('fa-star-o');
                }
            }
        }

        updateRating();

        if (!$(ratingDiv).data('readonly')) {
            ratingDiv.querySelectorAll('.fa').forEach(function(icon) {

                const iconRatingValue = $(icon).data('rating');

                icon.addEventListener('click', () => {
                    console.log(iconRatingValue);

                    ratingDiv.querySelector('input.rating-value').value = iconRatingValue;
                    updateRating();
                });
            });
        }

    }

}


// $(document).ready(setUpStarRating);
// $(document).on('page:load', setUpStarRating);
$(document).on('turbolinks:load', setUpStarRating);