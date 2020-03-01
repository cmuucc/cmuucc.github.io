function getScripts( scripts, onScript, onComplete )
{
    this.async = true;
    this.cache = false;
    this.data = null;
    this.complete = function () { $.scriptHandler.loaded(); };
    this.scripts = scripts;
    this.onScript = onScript;
    this.onComplete = onComplete;
    this.total = scripts.length;
    this.progress = 0;
};

getScripts.prototype.fetch = function() {
    $.scriptHandler = this;
    var src = this.scripts[ this.progress ];
    console.log('%cFetching %s','color:#ffbc2e;', src);

    $.ajax({
        crossDomain:true,
        async:this.async,
        cache:this.cache,
        type:'GET',
        url: src,
        data:this.data,
        statusCode: {
            200: this.complete
        },
        dataType:'script'
    });
};

getScripts.prototype.loaded = function () {
    this.progress++;
    if( this.progress >= this.total ) {
        if(this.onComplete) this.onComplete();
    } else {
        this.fetch();
    };
    if(this.onScript) this.onScript();
};


var scripts = new getScripts(
    ['../../assets/js/popper.min.js',
	 '../../assets/js/bootstrap.min.js',
	 '../../assets/js/bootstrap.bundle.min.js',
	 '../../assets/js/prettify.min.js',
	 '../../assets/js/fancybox.min.js',
	 '../../assets/js/flipclock.min.js',
	 '../../assets/js/swiper.min.js',
	 '../../assets/js/isotope.min.js',
	 '../../assets/js/particles.min.js',
	 '../../assets/js/jquery.stellar.min.js',
	 '../../assets/js/instagram.min.js',
	 '../../assets/js/odometer.min.js',
	 '../../assets/js/perspective.min.js',
	 '../../assets/js/jquery.validate.min.js',
	 '../../assets/js/jquery.form.min.js',
	 '../../assets/js/contact.form.min.js',
	 '../../assets/js/wow.min.js',
	 '../../assets/js/TweenMax.min.js',
	 '../../assets/js/easypiechart.min.js',
	 '../../assets/js/inits.js',
	 'js/scripts.js'],
    function() {
       
		// PRELOADER
		
			(function($) {
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});
		})(jQuery)
    
	},
	
    function () {
		// ---
    }
);
scripts.fetch();




