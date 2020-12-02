import HeaderModule from './modules/HeaderModule.js';
import AosModule from './modules/AosModule.js';
import LightGalleryModule from './modules/LightGalleryModule.js';
import MfpModule from './modules/MfpModule.js';
import SwiperModule from './modules/SwiperModule.js';
import TabModule from './modules/TabModule.js';
import InputCustomModule from './modules/InputCustomModule.js';
import SideMenuModule from './modules/SideMenuModule.js';

jQuery(document).ready(function ($) {
	AosModule();
	HeaderModule();
	LightGalleryModule();
	MfpModule();
	SwiperModule();
	TabModule();
	InputCustomModule();
	SideMenuModule();
});
