export default function SideMenuModule() {
	/** SIDE MENU */
	// ADD ICON ARROW FOR MENU HAS SUB MENU
	$('.side-menu__list  .dropdown').each(function () {
		const dropdown = $(this);
		const arrows = $('<i></i>');
		arrows.addClass('fa fa-angle-right');
		dropdown.find('> p').eq(0).append(arrows);
	});

	const dropdown = $('.side-menu__list .dropdown');
	function activeSelect(el) {
		$('body').addClass('--active-select');
		$(el).css('z-index', 900);
	}
	function inactiveSelect() {
		$('body').removeClass('--active-select');
		$(dropdown).css('z-index', 'unset');
	}
	//WHEN DROPDOWN CLICK TO SHOW SUB-MENU + OVERLAY BODY
	dropdown.on('click', function (e) {
		e.preventDefault();
		// REMOVE ALL SIBLINGS DROPDOWN
		$(this).siblings().removeClass('--show');
		$(this).siblings().find('.sub-menu-wrap').fadeOut(300);
		$(this).siblings().find('.fa').removeClass('--active');
		// SHOW DROPDOWN
		$(this).toggleClass('--show');
		$(this).find('.fa').toggleClass('--active');

		if ($(this).hasClass('--show') && $(window).width() <= 768) {
			activeSelect(this);
		} else {
			inactiveSelect(this);
		}
		//
		if ($(window).width() <= 768) {
			$(this).find('.sub-menu-wrap').slideToggle(300);
		} else {
			$(this).find('.sub-menu-wrap').fadeToggle(300);
		}
	});

	$('.sub-menu-wrap li[data-value]').on('click', function (e) {
		// REMOVE SIBLING OPTION
		$(this).siblings().removeClass('--active');
		// ACTIVE SELECTED OPTION
		$(this).addClass('--active');
		// GET VALUE THEN SET FOR SELECT
		const value = $(this).data('value');
		$(this).closest('.dropdown').find('.selected-value').text(value);
	});
	$('body').on('click', function (e) {
		//IGNORE TRIGGER 2 TIME WHEN CLICK ON DROPDOWN ELEMENT
		if (e.target.closest('.dropdown')) return;
		if (!e.target.closest('.dropdown')) {
			const dropdown = $('.side-menu__list .dropdown');
			//FIND ALL DROPDOWN TO IN-ACTIVE SUB MENU
			dropdown.removeClass('--show');
			//FIND ALL SUB-MENU-WRAP TO IN-ACTIVE
			$(this).find('.sub-menu-wrap').fadeOut(300);
		}
		if ($(this).hasClass('--active-select') && $(window).width() <= 768) {
			inactiveSelect(this);
		}
	});
	/** SIDE  MENU - END */
}
