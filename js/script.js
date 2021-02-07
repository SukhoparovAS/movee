$(document).ready(function(){
	$('.burger').click(function(event) {
		$('.burger , .menu').toggleClass('active');
	});
	$('.slider').slick({
		arrows:false,
		dots: false,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:'linear',
		infinite:true,
		initialSlide:1,
		autoplay:true,
		autoplaySpeed:5000,
		pausOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:7,
		touchMove:true,
		waitForAnimate:false,
		centerMode:false,
		variableWidth:false,
		rows:1,
		fade:false,
	});


		function tabs(tab_link,tab_block,start = 0){
			$(tab_link+":eq("+start+")").addClass('active');
			$(tab_block+":eq("+start+")").addClass('active');
			$(tab_link).click(function(event) {
				let tab_id = $(tab_link).index(this);
				let tab_quantity = $(tab_block).length;
				for(i = 0; i < tab_quantity; i++){
					$(tab_link+":eq("+i+")").removeClass('active');
					$(tab_block+":eq("+i+")").removeClass('active');
				}
				$(tab_link+":eq("+tab_id+")").addClass('active');
				$(tab_block+":eq("+tab_id+")").addClass('active');
			});
		}


		function openReview(open_link,text_block){
			let reviews_quantity = $(text_block).length;
			for(let i = 0; i < reviews_quantity; i++){
				if($(text_block + ":eq(" + i + ")").height() <= 150){
					//$(open_link + ":eq(" + i + ")").text("Ч1");
				}
			}
				$(open_link).click(function(event) {
					let link_id = $(open_link).index(this);
					$(text_block + ":eq(" + link_id + ")").toggleClass('open');
					$(open_link + ":eq(" + link_id + ")").toggleClass('open');
					if($(open_link + ":eq(" + link_id + ")").hasClass('open')){
						$(open_link + ":eq(" + link_id + ")").text("Свернуть");
					}
					else{
						$(open_link + ":eq(" + link_id + ")").text("Читать полностью");
					}
				});
		}

		openReview('.r-item__open-link','.r-item__text');
		tabs(".tabs__item",".tabs__block",1);
});
