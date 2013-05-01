// JavaScript Document

$(document).ready(function () {
	"use strict";
	/*set images here*/
	var box1_image = 'lib/my.jpg',
		box2_image = 'lib/my.jpg',
		box3_image = 'lib/my.jpg',
		box4_image = 'lib/my.jpg',
		box5_image = 'lib/my.jpg',
		box6_image = 'lib/my.jpg',

		box1_image_hover = 'lib/myh.jpg',
		box2_image_hover = 'lib/myh.jpg',
		box3_image_hover = 'lib/myh.jpg',
		box4_image_hover = 'lib/myh.jpg',
		box5_image_hover = 'lib/myh.jpg',
		box6_image_hover = 'lib/myh.jpg',


		animateWgt = '466', //On hover, box will animate to this size
		animateHgt = '500', //On hover, box will animate to this size

		defaultWgt = '233', //by default, it will be of 300px width
		defaultHgt = '250', //by default, it will be of of 250px height

		defaultBottom = '250', //18px is the white-space betn these boxes, so, defaultBottom will be 268px
		defaultLeft = '300', //18px is the white-space betn these boxes, so, defaultLeft will be 318px

		taget_animateWgt = '99', //when box1 expands, two boxes will be of 204px width
		notaget_animateWgt = '66', //when box1 expands, thress boxes will be of 134px width

		box1_default_top = '0', //box1, box2, box3 default top
		box2_default_top = '250', //box4, box5, box6 default top
		box3_default_top = '536', //box7, box8, box9 default top


		box1_default_left = '0', //box1, box4, box7 default left
		box2_default_left = parseInt(defaultWgt), //box2, box5, box8 default left
		box3_default_left = parseInt(defaultWgt) + parseInt(defaultWgt), //box3, box6, box9 default left

		box1_set_left2_top = parseInt(animateWgt), //when box1 or box4 expands, box2 or box5 left will be 524px //204px boxes with 6px and 4px margin respectively
		box1_set_left3_top = parseInt(box1_set_left2_top) + parseInt(notaget_animateWgt), //when box1 or box4 expands, box3 or box6 left will be 732px
		box1_set_left1_bot = '466', //when box1 or box4 expands, box4 or box7 left will be 524px //132px boxes with 6px and 8px margin respectively
		box1_set_left2_bot = '532', //when box1 or box4 expands, box5 or box8 left will be 664px
		box1_set_left3_bot = '598', //when box1 or box4 expands, box6 or box9 left will be 804px

		active_top2_set3_left = '842', //when box2 or box5 expands, box3, box6 or box6 or box9 left will be 842px //94px boxes and 6px margin
		active_top2_set3_width = '94', //when box2 or box5 expands , box3, box6 or box6 or box9 width will be 94px
		active_top2_set2bot_left = '158', //when box2 or box5 expands, box5 or box8 left will be 158px
		active_bot2_width = '140', 		// and width will be 140px each	//hence 20px margin will be in betn

		active_top3_set2top_left = '208', //when box3 or box6 expands, box2 or box5 left will be 210px
		active_top3_left = '418', //when box3 or box6 expands, box3 or box6 left will be 420px
		active_top3_left_bot2 = '140', //when box3 or box6 expands, box5 or box8 left will be 140px
		active_top3_left_bot3 = '280', //when box3 or box6 expands, box6 or box9 left will be 280px


		box1_width = defaultWgt,
		box1_height = defaultHgt,
		box1_left = box1_default_left,
		box1_top = box1_default_top,

		box2_width = defaultWgt,
		box2_height = defaultHgt,
		box2_left = box2_default_left,
		box2_top = box1_default_top,

		box3_width = defaultWgt,
		box3_height = defaultHgt,
		box3_left = box3_default_left,
		box3_top = box1_default_top,

		box4_width = defaultWgt,
		box4_height = defaultHgt,
		box4_left = box1_default_left,
		box4_top = box2_default_top,

		box5_width = defaultWgt,
		box5_height = defaultHgt,
		box5_left = box2_default_left,
		box5_top = box2_default_top,

		box6_width = defaultWgt,
		box6_height = defaultHgt,
		box6_left = box3_default_left,
		box6_top = box2_default_top,

		restore_image = function () {
			$("#box1-image").attr('src', box1_image);
			$("#box2-image").attr('src', box2_image);
			$("#box3-image").attr('src', box3_image);
			$("#box4-image").attr('src', box4_image);
			$("#box5-image").attr('src', box5_image);
			$("#box6-image").attr('src', box6_image);

		},

		change_image = function (id) {
			restore_image();
			var hover_image;
			switch (id) {
				case 'box1':
					hover_image = box1_image_hover;
					break;
				case 'box2':
					hover_image = box2_image_hover;
					break;

				case 'box3':
					hover_image = box3_image_hover;
					break;

				case 'box4':
					hover_image = box4_image_hover;
					break;

				case 'box5':
					hover_image = box5_image_hover;
					break;

				case 'box6':
					hover_image = box6_image_hover;
					break;

				default:
					break;


			}
			$("#" + id + "-image").attr('src', hover_image);
		},


		create_animate = function () {
			$('#box1').stop(true, true).animate(
				{
					width : box1_width+'px',
					height: box1_height+'px',
					left  : box1_left+'px',
					top   : box1_top+'px'
				});
			$('#box2').stop(true, true).animate(
				{
					width : box2_width+'px',
					height: box2_height+'px',
					left  : box2_left+'px',
					top   : box2_top+'px'
				});
			$('#box3').stop(true, true).animate(
				{
					width : box3_width+'px',
					height: box3_height+'px',
					left  : box3_left+'px',
					top   : box3_top+'px'
				});
			$('#box4').stop(true, true).animate(
				{
					width : box4_width+'px',
					height: box4_height+'px',
					left  : box4_left+'px',
					top   : box4_top+'px'
				});
			$('#box5').stop(true, true).animate(
				{
					width : box5_width+'px',
					height: box5_height+'px',
					left  : box5_left+'px',
					top   : box5_top+'px'
				});
			$('#box6').stop(true, true).animate(
				{
					width : box6_width+'px',
					height: box6_height+'px',
					left  : box6_left+'px',
					top   : box6_top+'px'
				});


		};

	restore_image();

	$('.list-item').bind(
		{
			mouseenter: function () {

				var id = $(this).attr('id');
				switch (id) {
					case 'box1':
						//taget box 1
						box1_width = animateWgt,
							box1_height = animateHgt,
							box1_left = box1_default_left,
							box1_top = box1_default_top,

							box2_width = taget_animateWgt,
							box2_height = defaultHgt,
							box2_left = box1_set_left2_top,
							box2_top = box1_default_top,

							box3_width = taget_animateWgt,
							box3_height = defaultHgt,
							box3_left = box1_set_left3_top,
							box3_top = box1_default_top,

							box4_width = notaget_animateWgt,
							box4_height = defaultHgt,
							box4_left = box1_set_left1_bot,
							box4_top = box2_default_top,

							box5_width = notaget_animateWgt,
							box5_height = defaultHgt,
							box5_left = box1_set_left2_bot,
							box5_top = box2_default_top,

							box6_width = notaget_animateWgt,
							box6_height = defaultHgt,
							box6_left = box1_set_left3_bot,
							box6_top = box2_default_top,


							create_animate();
						break;
					case 'box2':

						//taget box 2
						box1_width = defaultWgt,
							box1_height = defaultHgt,
							box1_left = box1_default_left,
							box1_top = box1_default_top,

							box2_width = animateWgt,
							box2_height = animateHgt,
							box2_left = box2_default_left,
							box2_top = box1_default_top,

							box3_width = active_top2_set3_width,
							box3_height = defaultHgt,
							box3_left = active_top2_set3_left,
							box3_top = box1_default_top,

							box4_width = active_bot2_width,
							box4_height = defaultHgt,
							box4_left = box1_default_left,
							box4_top = box2_default_top,

							box5_width = active_bot2_width,
							box5_height = defaultHgt,
							box5_left = active_top2_set2bot_left,
							box5_top = box2_default_top,

							box6_width = active_top2_set3_width,
							box6_height = defaultHgt,
							box6_left = active_top2_set3_left,
							box6_top = box2_default_top,

							create_animate();
						break;

					case 'box3':
						//taget box 3
						box1_width = taget_animateWgt,
							box1_height = defaultHgt,
							box1_left = box1_default_left,
							box1_top = box1_default_top,

							box2_width = taget_animateWgt,
							box2_height = defaultHgt,
							box2_left = active_top3_set2top_left,
							box2_top = box1_default_top,

							box3_width = animateWgt,
							box3_height = animateHgt,
							box3_left = active_top3_left,
							box3_top = box1_default_top,

							box4_width = notaget_animateWgt,
							box4_height = defaultHgt,
							box4_left = box1_default_left,
							box4_top = box2_default_top,

							box5_width = notaget_animateWgt,
							box5_height = defaultHgt,
							box5_left = active_top3_left_bot2,
							box5_top = box2_default_top,

							box6_width = notaget_animateWgt,
							box6_height = defaultHgt,
							box6_left = active_top3_left_bot3,
							box6_top = box2_default_top,

							create_animate();
						break;

					case 'box4':
						//taget box 4
						box1_width = notaget_animateWgt,
							box1_height = defaultHgt,
							box1_left = box1_set_left1_bot,
							box1_top = box1_default_top,

							box2_width = notaget_animateWgt,
							box2_height = defaultHgt,
							box2_left = box1_set_left2_bot,
							box2_top = box1_default_top,

							box3_width = notaget_animateWgt,
							box3_height = defaultHgt,
							box3_left = box1_set_left3_bot,
							box3_top = box1_default_top,

							box4_width = animateWgt,
							box4_height = animateHgt,
							box4_left = box1_default_left,
							box4_top = box1_default_top,

							box5_width = taget_animateWgt,
							box5_height = defaultHgt,
							box5_left = box1_set_left2_top,
							box5_top = box2_default_top,

							box6_width = taget_animateWgt,
							box6_height = defaultHgt,
							box6_left = box1_set_left3_top,
							box6_top = box2_default_top,

							create_animate();
						break;

					case 'box5':

						//taget box 5
						box1_width = notaget_animateWgt,
							box1_height = defaultHgt,
							box1_left = box1_default_left,
							box1_top = box1_default_top,

							box2_width = notaget_animateWgt,
							box2_height = defaultHgt,
							box2_left = active_top2_set2bot_left,
							box2_top = box1_default_top,

							box3_width = active_top2_set3_width,
							box3_height = defaultHgt,
							box3_left = active_top2_set3_left,
							box3_top = box1_default_top,


							box4_width = defaultWgt,
							box4_height = defaultHgt,
							box4_left = box1_default_left,
							box4_top = box2_default_top,

							box5_width = animateWgt,
							box5_height = animateHgt,
							box5_left = box2_default_left,
							box5_top = box1_default_top,

							box6_width = active_top2_set3_width,
							box6_height = defaultHgt,
							box6_left = active_top2_set3_left,
							box6_top = box2_default_top,


							create_animate();
						break;

					case 'box6':
						//taget box 6
						box1_width = notaget_animateWgt,
							box1_height = defaultHgt,
							box1_left = box1_default_left,
							box1_top = box1_default_top,

							box2_width = notaget_animateWgt,
							box2_height = defaultHgt,
							box2_left = active_top3_left_bot2,
							box2_top = box1_default_top,

							box3_width = notaget_animateWgt,
							box3_height = defaultHgt,
							box3_left = active_top3_left_bot3,
							box3_top = box1_default_top,

							box4_width = taget_animateWgt,
							box4_height = defaultHgt,
							box4_left = box1_default_left,
							box4_top = box2_default_top,

							box5_width = taget_animateWgt,
							box5_height = defaultHgt,
							box5_left = active_top3_set2top_left,
							box5_top = box2_default_top,

							box6_width = animateWgt,
							box6_height = animateHgt,
							box6_left = active_top3_left,
							box6_top = box1_default_top,


							create_animate();
						break;
					default:
						break;
				}

				change_image(id);
			}

		});

	$('.list-wrapper').bind(
		{

			mouseleave: function () {
				box1_width = defaultWgt,
					box1_height = defaultHgt,
					box1_left = box1_default_left,
					box1_top = box1_default_top,

					box2_width = defaultWgt,
					box2_height = defaultHgt,
					box2_left = box2_default_left,
					box2_top = box1_default_top,

					box3_width = defaultWgt,
					box3_height = defaultHgt,
					box3_left = box3_default_left,
					box3_top = box1_default_top,

					box4_width = defaultWgt,
					box4_height = defaultHgt,
					box4_left = box1_default_left,
					box4_top = box2_default_top,

					box5_width = defaultWgt,
					box5_height = defaultHgt,
					box5_left = box2_default_left,
					box5_top = box2_default_top,

					box6_width = defaultWgt,
					box6_height = defaultHgt,
					box6_left = box3_default_left,
					box6_top = box2_default_top,

					create_animate();
				restore_image();
			}
		});
});