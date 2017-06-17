AOS.init({
	duration: 1200,
})
$(document).ready(function() {
  $(".navbar-nav a").on("click", function() {
    $(".navbar-nav ").find(".active").removeClass("active");
    $(this).addClass("active");
  });

	// Select all links with hashes
	$('a[href*="#"]')
		// Remove links that don't actually link to anything
		.not('[href="#"]')
		.not('[href="#0"]')
		.not('[href="#collapseTelegram"]')
		.not('[href="#collapseWhatsapp"]')
		.click(function(event) {
			// On-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000, function() {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});

	$("nav").on("click", "a", function() {
    $('.navbar-collapse').collapse('hide'); 
	});

	$('#collapseWhatsapp').on('show.bs.collapse', function() {
		$('#collapseTelegram').collapse('hide');
	})
	$('#collapseTelegram').on('show.bs.collapse', function() {
		$('#collapseWhatsapp').collapse('hide');
	})

});