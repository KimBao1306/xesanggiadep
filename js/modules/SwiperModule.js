export default function SwiperModule() {
	/** SWIPER */
	// RUN SLIDER IN MOBILE
	let sliderMobileList = [];
	function sliderMobile() {
		var screenWidth = $(window).width();
		if (screenWidth > 768 && sliderMobileList.length !== 0) {
			sliderMobileList.map((s) => s.destroy());
			sliderMobileList = [];
			$('.swiper-wrapper').removeAttr('style');
			$('.swiper-slide').removeAttr('style');
		} else if (screenWidth <= 768 && sliderMobileList.length === 0) {
			$('.is-slider-mobile').each(function () {
				const $this = $(this);
				const $swiper = $this.find('.swiper-container');
				const nextBtn = $this.find('.swiper-button-next');
				const prevBtn = $this.find('.swiper-button-prev');
				const pagination = $this.find('.swiper-pagination');
				const isLoop = $this.hasClass('--loop') || false;
				const isParallax = $this.hasClass('--parallax') || false;
				const isCenter = $this.hasClass('--center') || false;
				const isAuto =
					($this.hasClass('--auto') && {
						speed: 6000,
						delay: 5000,
						disableOnInteraction: false,
					}) ||
					false;
				const tempSwiper = new Swiper($swiper, {
					speed: 1200,
					// autoHeight: false,
					autoplay: isAuto,
					slidesPerView: 'auto',
					watchSlidesProgress: true,
					// TRIGGER SWIPER RUN ASYNCHRONOUS
					observer: true,
					observeParents: true,
					observeSlideChildren: true,
					pagination: {
						el: pagination,
						clickable: true,
					},
					navigation: {
						nextEl: nextBtn,
						prevEl: prevBtn,
					},
					centeredSlides: isCenter,
					parallax: isParallax,
					loop: isLoop,
				});
				sliderMobileList.push(tempSwiper);
			});
		}
	}
	$('.is-slider-mobile').length && sliderMobile();
	$(window).on('resize', function () {
		$('.is-slider-mobile').length && sliderMobile();
	});
	// RUN SLIDER IN MOBILE - END
	function swiper(el, callback = null) {
		const $this = $(el);
		const $swiper = $this.find('.swiper-container');
		const nextBtn = $this.find('.swiper-button-next');
		const prevBtn = $this.find('.swiper-button-prev');
		const pagination = $this.find('.swiper-pagination');
		const isLoop = $this.hasClass('--loop') || false;
		const isParallax = $this.hasClass('--parallax') || false;
		const isAuto =
			($this.hasClass('--auto') && {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			}) ||
			false;

		const swiper_common = new Swiper($swiper, {
			speed: 1200,
			// autoHeight: false,
			autoplay: isAuto,
			slidesPerView: 'auto',
			watchSlidesProgress: true,

			pagination: {
				el: pagination,
				clickable: true,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
			parallax: isParallax,
			loop: isLoop,
			on: {
				slideChange: function () {
					callback && callback.call(this);
				},
			},
		});
	}
	// MENU BANNER

	function runSwiper() {
		const swiperThumbs = new Swiper('.st__dt-thumbs-slider .swiper-container', {
			speed: 1200,
			autoplay: {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			},
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 0,
			grabCursor: true,
			loop: true,
		});
		const swiper = new Swiper('.st__dt-slider .swiper-container', {
			speed: 1200,
			autoplay: {
				speed: 6000,
				delay: 5000,
				disableOnInteraction: false,
			},
			autoplay: false,
			slidesPerView: 'auto',
			loop: true,
			grabCursor: true,
			thumbs: {
				swiper: swiperThumbs,
			},
			navigation: {
				nextEl: $('.st__dt-slider .swiper-button-next'),
				prevEl: $('.st__dt-slider .swiper-button-prev'),
			},
			pagination: {
				el: $('.st__dt-slider .swiper-pagination'),
				clickable: true,
			},
		});
	}

	$('.st__dt-slider').length &&
		$('.st__dt-thumbs-slider').length &&
		runSwiper();
	/** SWIPER - END*/
}
