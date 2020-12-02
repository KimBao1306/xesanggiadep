export default function HeaderModule() {
	/** MENU FIXED WHEN SCROLL */
	if ($('.hd').length) {
		const header = $('.hd');
		const headerHeight = header.outerHeight();
		const headerOffsetTop = header.offset().top;
		if (scrollY >= headerOffsetTop + headerHeight) {
			header.addClass('--fixed');
			header.next().css('margin-top', headerHeight);
		} else {
			header.removeClass('--fixed');
			header.next().css('margin-top', 0);
		}
		$(window).on('scroll', function () {
			if (scrollY >= headerOffsetTop + headerHeight) {
				$('.side-menu').addClass('--fixed');
				header.addClass('--fixed');
				header.next().css('margin-top', headerHeight);
			} else {
				$('.side-menu').removeClass('--fixed');
				header.removeClass('--fixed');
				header.next().css('margin-top', 0);
			}
		});
	}
	/** MENU FIXED WHEN SCROLL - END */

	/** ROAD: ADD CAR TO ACTIVE LOCATION */
	function addCarToActive() {
		// GET ACTIVE LOCATION
		const $this = $('.road .road__list-item.current-menu-item');
		if ($this.length) {
			// REMOVE PREVIOUS LOCATION
			const $prevEle = $this.prevAll();
			$prevEle
				.addClass('--prev-active')
				.find('img')
				.attr('src', 'images/road-location.png');
			$this.find('img').attr('src', 'images/car.png');
		}
	}
	$('.road').length && addCarToActive();
	/** ROAD: ADD CAR TO ACTIVE LOCATION - END */

	/** MENU BUTTON */
	if ($('.hamburger-btn').length && $('.road').length && $('.overlay').length) {
		$('.hamburger-btn').on('click', function () {
			$(this).toggleClass('--active');
			$('.road').toggleClass('--active');
			// $('body').css('overflow', 'hidden');
		});

		$('.overlay').on('click', function () {
			$('.hamburger-btn').removeClass('--active');
			$('.road').removeClass('--active');
			// $('body').css('overflow', '');
		});
	}
	/** MENU BUTTON - END*/

	/** SCROLL TO TOP */
	if ($('.scroll-top').length) {
		$('.scroll-top').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate(
				{
					// scrollTop: $("#to").offset().top //scroll đến vị trí #to
					scrollTop: 0,
				},
				500
			);
			return false;
		});

		$(window).on('scroll', function () {
			if ($(this).scrollTop() >= 10) {
				$('.scroll-top').addClass('--show');
			} else {
				$('.scroll-top').removeClass('--show');
			}
		});
	}
	/** SCROLL TO TOP - END*/
}
