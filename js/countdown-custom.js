(function($) {	
	'use strict';
    
    var year = 2025;
    var month = 12;
    var date = 21;
    var time = 0;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

