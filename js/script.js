$(document).ready(function(){

	// Login popup: fade open via .login-button, fade close via cancel / backdrop / Esc.
	function openLogin(){
		$('.login-popup').stop(true, true).css('display', 'flex').hide().fadeIn(250);
		$('body,html').css('overflow-y', 'hidden');
	}
	function closeLogin(){
		$('.login-popup').stop(true, true).fadeOut(250);
		$('body,html').css('overflow-y', '');
	}
	$(document).on('click', '.login-button', function(e){ e.preventDefault(); openLogin(); });
	$(document).on('click', '.login-popup .cancel-btn', function(e){ e.preventDefault(); closeLogin(); });
	$(document).on('click', '.login-popup', function(e){
		if (!$(e.target).closest('.box').length) closeLogin();
	});
	$(document).on('keydown', function(e){
		if (e.key === 'Escape' && $('.login-popup:visible').length) closeLogin();
	});
	// Toggle password visibility (also swaps which eye SVG is visible via .password-shown).
	$(document).on('click', '.login-popup .password-button>a', function(e){
		e.preventDefault();
		var $group = $(this).closest('.group__input');
		var $input = $group.find('input.password');
		var willShow = $input.attr('type') === 'password';
		$input.attr('type', willShow ? 'text' : 'password');
		$group.toggleClass('password-shown', willShow);
	});




	if ($('.slider.with__images').length) {
		$('.slider.with__images').slick({
			slidesToShow:1,
			adaptiveHeight:true,
			dots:true,
			arrows:false
		})
	}

	if ($('.boost .inside').length) {
		$('.boost .inside .inside__slider').slick({
			slidesToShow:1,
			arrows:true,
			adaptiveHeight:true,
			responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		      	arrows:false,
		      	dots:true,
		        slidesToShow: 1,
		      }
		    }
		  ]
		})
	}

	$(".boost__table .rows>.row").on('click' ,function(e){
		e.preventDefault();
		if ($(window).width() < 991) {
			if ($(this).hasClass('closed')) {
				$(this).removeClass('closed');
				$(this).find(".content").slideDown(400);
			} else {
				$(this).addClass('closed');
				$(this).find(".content").slideUp(400);
			}
		}
	});

	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.lang__picker').length) {
	  	$('.lang__picker>a').removeClass('opened');
	  	$('.lang__picker .dropdown').fadeOut(300);
	  }   
	  if(!$target.closest('.country__picker').length) {
	  	$('.country__picker>a').removeClass('opened');
	  	$('.country__picker .country__dropdown').fadeOut(300);
	  }        
	});

	$('.country__picker .country__dropdown  ul li a').on("click" ,function(e){
		e.preventDefault();
		$(this).closest(".country__picker").find(">a").removeClass('opened');
		$(this).closest(".country__picker").find(".country__dropdown").fadeOut(300);
		$(this).closest('.country__picker').find(".flag>img").attr("src" , $(this).find(".flag>img").attr('src'));
		$(this).closest('.country__picker').find(">a>.text").text($(this).find(".text").text());
	});

	$('.country__picker>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).closest('.country__picker').find('.country__dropdown').fadeOut(300);
		} else {
			$(this).addClass('opened');
			$(this).closest('.country__picker').find('.country__dropdown').fadeIn(300);
		}
	});



	$('.lang__picker .dropdown ul li a').on("click" ,function(e){
		e.preventDefault();
		$(this).closest(".lang__picker").find(">a").removeClass('opened');
		$(this).closest(".lang__picker").find(".dropdown").fadeOut(300);
		$(this).closest('.lang__picker').find(".text").text($(this).attr("data-lang"));
	});

	$('.lang__picker>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(this).closest('.lang__picker').find('.dropdown').fadeOut(300);
		} else {
			$(this).addClass('opened');
			$(this).closest('.lang__picker').find('.dropdown').fadeIn(300);
		}
	});



	$('.menu-btn>a').on("click" ,function(e){
		e.preventDefault();
		$('header nav .solid-menu').addClass("opened");
		$('.overlay').fadeIn(300);
		$('body,html').css('overflow-y' ,"hidden");
	});
	$('.overlay , .solid-menu>.close-menu').on('click' ,function(e){
		e.preventDefault();
		$('header nav .solid-menu').removeClass("opened");
		$('.overlay').fadeOut(300);
		$('body,html').css('overflow-y' ,"initial");
	});



	$('.pick-option .pick-elem').on('click' ,function(e){
		if (!$(this).hasClass('picked')) {
			$('.pick-option .pick-elem').removeClass("picked");
			$(this).addClass('picked');
			$('.pick-option>input').val($(this).attr("data-value"));
		}
	});

	$('.quantity .field>.quantity-plus').on("click",function(e){
		e.preventDefault();
		$(this).closest('.field').find("input").val(+$(this).closest('.field').find("input").val() + 1);
	});
	$('.quantity .field>.quantity-minus').on("click",function(e){
		e.preventDefault();
		if ($(this).closest('.field').find("input").val() > 1) {
			$(this).closest('.field').find("input").val(+$(this).closest('.field').find("input").val() - 1);			
		}
	});


	if ($('.complete__stack .outer__complete .grid').length) {
		if ($(window).width() < 991) {
			$('.complete__stack .outer__complete .grid').slick({
				slidesToShow:1,
				centerMode:true,
				centerPadding:"15%",
				arrows:false,
				dots:false
			})
		}
		$(window).on("resize" ,function(e){
			if ($(window).width() < 991) {
				if (!$('.complete__stack .outer__complete .grid').hasClass("slick-slider")) {
					$('.complete__stack .outer__complete .grid').slick({
						slidesToShow:1,
						centerMode:true,
						centerPadding:"15%",
						arrows:false,
						dots:false
					})
				}
			} else {
				if ($('.complete__stack .outer__complete .grid').hasClass("slick-slider")) {
					$('.complete__stack .outer__complete .grid').slick("unslick");
				}
			}
		});
	}



	if ($('.article__steps').length) {
		if ($(window).width() < 991) {
			$('.article__steps .grid').slick({
				slidesToShow:1,
				arrows:false,
				dots:false,
			})
		}
		$(window).on("resize" ,function(e){
			if ($(window).width() < 991) {
				if (!$('.article__steps .grid').hasClass("slick-slider")) {
					$('.article__steps .grid').slick({
						slidesToShow:1,
						centerMode:true,
						centerPadding:"15%",
						arrows:false,
						dots:false
					})
				}
			} else {
				if ($('.article__steps .grid').hasClass("slick-slider")) {
					$('.article__steps .grid').slick("unslick");
				}
			}
		});
	}



	$('.faq__section .inner>.elem').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass('opened')) {
			$(this).removeClass("opened");
			$(this).find(".content").slideUp(300);
		} else {
			$('.faq__section .inner>.elem').removeClass('opened');
			$('.faq__section .inner>.elem .content').slideUp(300)
			$(this).addClass("opened");
			$(this).find(".content").slideDown(300);
		}
	});


	$('.main__products .category-btn>a').on('click' ,function(e){
		e.preventDefault();
		$('.category__side').css('left' ,"0px");
		$('body,html').css("overflow-y" ,"hidden");
	});
	$('.category__side .close-btn>a').on("click" ,function(e){
		e.preventDefault();
		$('.category__side').css('left' ,"-100%");
		$('body,html').css("overflow-y" ,"initial");
	});

	if ($('.testimonials__slider').length) {
		$('.testimonials__slider .outer__testimonials').slick({
			slidesToShow:1,
			adaptiveHeight:true,
			dots:true,
			arrows:false
		})
	}
	if ($('.featured__products').length) {
		$('.featured__products .slider').slick({
			slidesToShow:3,
			dots:true,
			arrows:true,
			appendDots:$(".bottom__controls"),
			responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 1,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		})

		var featuredEnabled = false;
		function applyFeaturedHover(){
			var enable = $(window).width() >= 1200;
			var $slides = $('.featured__products .slide');

			if (!enable) {
				if (featuredEnabled) {
					$slides.off('.featured');
					$slides.each(function(){
						$(this).find('.desc > span').stop(true, true).css({ height: '', maxHeight: '', overflow: '' });
						$(this).find('.btn-box').stop(true, true).css({ display: '' });
					});
					featuredEnabled = false;
				}
				return;
			}

			$slides.off('.featured');
			$slides.each(function(){
				var $slide = $(this);
				var $sub = $slide.find('.desc > span');
				var $btn = $slide.find('.btn-box');
				if (!$sub.length) return;

				var lineH = parseFloat($sub.css('line-height')) || 33;
				$sub.stop(true, true).css({ maxHeight: 'none', overflow: 'hidden', height: lineH + 'px' });
				$btn.stop(true, true).hide();

				$slide.on('mouseenter.featured', function(){
					$sub.stop(true);
					$sub.css('height', 'auto');
					var natural = $sub.outerHeight();
					$sub.css('height', lineH + 'px');
					$sub.animate({ height: natural }, 300);
					$btn.stop(true).slideDown(300);
				}).on('mouseleave.featured', function(){
					$sub.stop(true).animate({ height: lineH }, 300);
					$btn.stop(true).slideUp(300);
				});
			});
			featuredEnabled = true;
		}
		applyFeaturedHover();
		var featuredResizeTimer;
		$(window).on('resize.featured', function(){
			clearTimeout(featuredResizeTimer);
			featuredResizeTimer = setTimeout(applyFeaturedHover, 150);
		});
	}

	if ($('.hero__section').length) {
		$('.hero__section .slider').slick({
			slidesToShow:1,
			dots:true,
			arrows:false,
		})
	}
	$('.accordion>.head').on("click" ,function(e){
		if ($(this).closest(".accordion").hasClass('opened')) {
			$(this).closest(".accordion").removeClass('opened');
			$(this).closest(".accordion").find('.content').slideUp(500);			
		} else {
			$(this).closest(".accordion").addClass('opened');
			$(this).closest(".accordion").find('.content').slideDown(500);			
		}
	});

	if ($('.product__section').length) {
		$('.product__section .main-slider').slick({
			slidesToShow: 1,
			arrows: true,
			fade: true,
			swipe: true,
			swipeToSlide: true,
			asNavFor: '.product__section .horizontal-product'
		});
		$('.product__section .horizontal-product').slick({
			slidesToShow: 5,
			dots: false,
			arrows: false,
			swipe: true,
			swipeToSlide: true,
			focusOnSelect: true,
			asNavFor: '.product__section .main-slider'
		});
	}

	if ($('.compare-inner').length) {
		$('.compare-inner').each(function(){
			var $el = $(this);
			var $before = $el.children('.before');
			var $after = $el.children('.after');
			var $imgs = $el.find('> .before > .img, > .after > .img');
			var $handle = $('<div class="compare-handle"><div class="knob"></div></div>').appendTo($el);

			function sizeImgs(){
				$imgs.css('width', $el.outerWidth() + 'px');
			}
			function setPos(pct){
				if (pct < 0) pct = 0;
				if (pct > 100) pct = 100;
				$before.css('width', pct + '%');
				$after.css('width', (100 - pct) + '%');
				$handle.css('left', pct + '%');
			}
			function pctFromEvent(e){
				var pageX = e.pageX;
				if (pageX == null && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0]) {
					pageX = e.originalEvent.touches[0].pageX;
				}
				if (pageX == null && e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0]) {
					pageX = e.originalEvent.changedTouches[0].pageX;
				}
				var rect = $el[0].getBoundingClientRect();
				var x = pageX - rect.left - $(window).scrollLeft();
				return (x / rect.width) * 100;
			}

			sizeImgs();
			setPos(50);

			var dragging = false;
			$handle.on('mousedown touchstart', function(e){
				dragging = true;
				$el.addClass('dragging');
				e.preventDefault();
			});
			$(document).on('mousemove.compare touchmove.compare', function(e){
				if (!dragging) return;
				e.preventDefault();
				setPos(pctFromEvent(e));
			});
			$(document).on('mouseup.compare touchend.compare touchcancel.compare', function(){
				if (!dragging) return;
				dragging = false;
				$el.removeClass('dragging');
			});

			$(window).on('resize', sizeImgs);
		});
	}

	if ($('.slider-products').length) {
		$('.slider-products').css("width" , $('.slider-products').outerWidth() + $('.slider-products').offset().left);
		$(window).on("resize" ,function(){
			$('.slider-products').css("width" , "auto");
			$('.slider-products').css("width" , $('.slider-products').outerWidth() + $('.slider-products').offset().left);
		});
		$('.slider-products').slick({
			variableWidth:true,
			arrows:false,
			dots:false,
			swipe:true,
			swipeToSlide:true
		})
	}
});