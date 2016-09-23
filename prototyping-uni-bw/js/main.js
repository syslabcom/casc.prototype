var ytPlayer;
function onYouTubePlayerAPIReady() {

	if ( $('#ytPlayer').length ) {
		ytPlayer = new YT.Player('ytPlayer', {
			width: '100%',
			videoId: 'qdraauX_m9M'
		});
	}
};

jQuery(function($) {

	$('.dropdown-toggle.mobile').on("click", function(e){
		$(this).parent().siblings().find('.dropdown-menu.inner').css({ 'display' : 'none'});
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});

	$('.dropdown-submenu a.test').on("click", function(e){
		$(this).parent().siblings().find('.dropdown-menu.fak:visible').toggle();
		$(this).next('ul').toggle();
		e.stopPropagation();
		e.preventDefault();
	});

	var toggleSearch = function () {

		var btn = $('#search-btn');

		if (!btn.hasClass('open')) {

			$('#overlay-search').animate({
				width: 200,
				'opacity': '1'
			}, 300, function () {
				$(this).focus();
				$(this).css('padding', '5px');
				btn.addClass('open');
			});

		}else {

			$('#overlay-search').animate({
				width: 0,
				'opacity': 0
			}, 300, function () {
				$(this).css('padding', '0px');
				btn.removeClass('open');
			});

		}
	}

	$('#search-btn').on('click', function () {
		if ($(window).width() > 1200) {
			toggleSearch();
		}
	});

	$('#overlay-search').on('focusout', function () {
		if ($(window).width() > 1200) {
			toggleSearch();
		}
	});

	var isMobile = $(window).width() < 1200;

	$(window).on('resize', function() {
		isMobile = $(window).width() < 1200;
	});

	if (!isMobile) {
		$('.navbar').hcSticky({
			onStart: function () {
				$('.search-btn-animated').animate({
					'opacity': '1'
				}, 200);
			},
			onStop: function () {
				$('.search-btn-animated').animate({
					'opacity': '0'
				}, 200);
			}
		});

		$('#breadcrumb').hcSticky({
			top: $('.navbar-collapse.secondary').length ? 117 : 86,
			onStart: function () {

				$('#breadcrumb').css({
					'box-shadow': 'inset 40px 0 0 ' + $('.secondary-header .marker').css('background-color')
				});
			},
			onStop: function () {
				$('#breadcrumb').css({
					'box-shadow': 'none'
				})
			}
		});
	}

	$( '.centered' ).each(function( e ) {
		$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( e ) {
			$(this).css('margin-top',  ($('#main-slider').height() - $(this).height())/2);
		});
	});

	//goto top
	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});

	var top = 0;

	$(window).scroll(function() {

		// Don't animate on mobile
		if ( !isMobile ) {

			var inc;

			var newPos = window.scrollY;

			if (newPos>top) {
				inc=1;
			}
			else {
				inc=-1;
			}
			while (top!=newPos) {
				top += inc;

				if (top<=67) {

					$('#logo-small.animated').css({
						top: 67 - (top)
					});

					$('#logo-big.animated').css({
						top: 20 - (top)
					});

				}

			}
		}


		// Play video when in viewport
		if ( ytPlayer && !isMobile ) {

			if ( $('.video').is(":in-viewport") ) {
				ytPlayer.playVideo();
			} else {
				ytPlayer.stopVideo();
			}
		}

	});

	/*
	* Suche Intranet
	* */

	var search = {

		filters: [],
		search: null,
		searchTerm: '',
		sorting: 'hits',

		init: function() {
			this.registerIsotope();
			this.registerSearch();
			this.registerFilter();
			this.registerSorting();
			this.filter();
		},

		registerIsotope: function () {
			this.search = $('.search-results').isotope(this.getOptions());
		},

		getOptions: function () {

			return {
				itemSelector: '.grid-item',
				layoutMode: 'masonry',
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: 10,
					isFitWidth: true
				},
				getSortData: {
					alphabetical: '.text',
					hits: '[data-hits] parseInt'
				},
				sortAscending: {
					hits: false
				}
			};

		},

		registerSearch: function() {
			var that = this;
			$('#search-box').on('keyup', _.debounce(function (e) {
				that.searchTerm = $(this).val().toLowerCase();
				that.filter();
			}, 100));
		},

		registerFilter: function() {

			var that = this;

			$('.filter').on('change', function (ev) {
				var val = $(this).val().toLowerCase();

				if ($(this)[0].checked) {
					that.filters.push(val);
				}else {
					that.filters = _.without(that.filters, val);
				}
				that.filter();
			});
		},

		registerSorting: function () {
			var that = this;
			$('#sorting').on('change', function () {
				that.sorting = $(this).val();
				that.filter();
			});
		},

		filter: function() {

			var that = this;

			var searchTerm = that.searchTerm.trim();

			if (searchTerm !== '') {
				searchTerm = searchTerm.toLowerCase();
			}

			var config = {
				filter: function() {

					var category = $(this).data('category').toLowerCase();
					var text = $(this).find('.text').text().toLowerCase();

					if (searchTerm !== '' && that.filters.length !== 0) {
						return _.contains(that.filters, category) && (text.indexOf(searchTerm) > -1 || category.indexOf(searchTerm) > -1);
					}

					if (searchTerm !== '' && that.filters.length === 0) {
						return (text.indexOf(searchTerm) > -1) || (category.indexOf(searchTerm) > -1);
					}

					if (searchTerm === '' && that.filters.length !== 0) {
						return _.contains(that.filters, category);
					}

					return true;
				},
				sortBy: this.sorting
			};

			this.search.isotope(config);
		}
	};

	if ($('.search-results').length > 0) {
		search.init();
	}

	/*
	 * Forms
	 * */

	var form = {
		init: function () {
			Dropzone.options.uploadForm = {
				previewTemplate: document.getElementById('preview-template').innerHTML,
				dictDefaultMessage: ''
			};
		}
	}

	if ( $('#upload-form').length > 0) {
		form.init();
	}

	if ( $('#birthday').length > 0 ) {
		$('#birthday').datepicker({
			format: 'dd.mm.yyyy',
			calendarWeeks: true,
			todayHighlight: true,
			title: 'Geburtsdatum',
			startView: 'decade',
			language: 'de'
		});
	}



});
