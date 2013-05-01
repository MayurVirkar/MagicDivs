// JavaScript Document
$(document).ready(function()
                  {


	                  var animateWgt = '518px'; //On hover, box will animate to this size
	                  var animateHgt = '518px'; //On hover, box will animate to this size

	                  var defaultWgt = '300px'; //by default, it will be of 300px width
	                  var defaultHgt = '250px'; //by default, it will be of of 250px height

	                  var defaultBottom = '268px'; //18px is the white-space betn these boxes, so, defaultBottom will be 268px
	                  var defaultLeft = '318px'; //18px is the white-space betn these boxes, so, defaultLeft will be 318px

	                  var taget_animateWgt = '204px'; //when box1 expands, two boxes will be of 204px width
	                  var notaget_animateWgt = '132px'; //when box1 expands, thress boxes will be of 134px width

	                  var box1_default_top = '0px'; //box1, box2, box3 default top
	                  var box2_default_top = '268px'; //box4, box5, box6 default top
	                  var box3_default_top = '536px'; //box7, box8, box9 default top


	                  var box1_default_left = '0px'; //box1, box4, box7 default left
	                  var box2_default_left = '318px'; //box2, box5, box8 default left
	                  var box3_default_left = '636px'; //box3, box6, box9 default left

	                  var box1_set_left2_top = '524px'; //when box1 or box4 expands, box2 or box5 left will be 524px //204px boxes with 6px and 4px margin respectively
	                  //here
	                  var box1_set_left3_top = '732px'; //when box1 or box4 expands, box3 or box6 left will be 732px
	                  var box1_set_left1_bot = '524px'; //when box1 or box4 expands, box4 or box7 left will be 524px //132px boxes with 6px and 8px margin respectively
	                  var box1_set_left2_bot = '664px'; //when box1 or box4 expands, box5 or box8 left will be 664px
	                  var box1_set_left3_bot = '804px'; //when box1 or box4 expands, box6 or box9 left will be 804px

	                  var active_top2_set3_left = '842px'; //when box2 or box5 expands, box3, box6 or box6 or box9 left will be 842px //94px boxes and 6px margin
	                  var active_top2_set3_width = '94px'; //when box2 or box5 expands , box3, box6 or box6 or box9 width will be 94px
	                  var active_top2_set2bot_left = '158px'; //when box2 or box5 expands, box5 or box8 left will be 158px
	                  var active_bot2_width = '140px'; 		// and width will be 140px each	//hence 20px margin will be in betn

	                  var active_top3_set2top_left = '208px'; //when box3 or box6 expands, box2 or box5 left will be 210px
	                  var active_top3_left = '418px'; //when box3 or box6 expands, box3 or box6 left will be 420px
	                  var active_top3_left_bot2 = '140px'; //when box3 or box6 expands, box5 or box8 left will be 140px
	                  var active_top3_left_bot3 = '280px'; //when box3 or box6 expands, box6 or box9 left will be 280px



	                  var box1_width = defaultWgt;
	                  var box1_height = defaultHgt;
	                  var box1_left = box1_default_left;
	                  var box1_top = box1_default_top;

	                  var box2_width = defaultWgt;
	                  var box2_height = defaultHgt;
	                  var box2_left = box2_default_left;
	                  var box2_top = box1_default_top;

	                  var box3_width = defaultWgt;
	                  var box3_height = defaultHgt;
	                  var box3_left = box3_default_left;
	                  var box3_top = box1_default_top;

	                  var box4_width = defaultWgt;
	                  var box4_height = defaultHgt;
	                  var box4_left = box1_default_left;
	                  var box4_top = box2_default_top;

	                  var box5_width = defaultWgt;
	                  var box5_height = defaultHgt;
	                  var box5_left = box2_default_left;
	                  var box5_top = box2_default_top;

	                  var box6_width = defaultWgt;
	                  var box6_height = defaultHgt;
	                  var box6_left = box3_default_left;
	                  var box6_top = box2_default_top;



	                  $('.list-item').bind(
		                  {
			                  mouseenter: function()
			                  {

				                  var id = $(this).attr('id');
				                  switch (id)
				                  {
					                  case 'box1':
						                  return ( //taget box 1
							                  (box1_width = animateWgt), (box1_height = animateHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = taget_animateWgt), (box2_height = defaultHgt), (box2_left = box1_set_left2_top), (box2_top = box1_default_top),

								                  (box3_width = taget_animateWgt), (box3_height = defaultHgt), (box3_left = box1_set_left3_top), (box3_top = box1_default_top),

								                  (box4_width = notaget_animateWgt), (box4_height =
							                                                          defaultHgt), (box4_left = box1_set_left1_bot), (box4_top =
							                                                                                                          box2_default_top),

								                  (box5_width = notaget_animateWgt), (box5_height =
							                                                          defaultHgt), (box5_left = box1_set_left2_bot), (box5_top =
							                                                                                                          box2_default_top),

								                  (box6_width = notaget_animateWgt), (box6_height =
							                                                          defaultHgt), (box6_left = box1_set_left3_bot), (box6_top =
							                                                                                                          box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),


								                  (create_animate()));
						                  break;
					                  case 'box2':

						                  return ( //taget box 2
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = animateWgt), (box2_height = animateHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = active_top2_set3_width), (box3_height =
							                                                              defaultHgt), (box3_left = active_top2_set3_left), (box3_top =
							                                                                                                                 box1_default_top),

								                  (box4_width = active_bot2_width), (box4_height =
							                                                         defaultHgt), (box4_left = box1_default_left), (box4_top =
							                                                                                                        box2_default_top),

								                  (box5_width = active_bot2_width), (box5_height =
							                                                         defaultHgt), (box5_left = active_top2_set2bot_left), (box5_top =
							                                                                                                               box2_default_top),

								                  (box6_width = active_top2_set3_width), (box6_height =
							                                                              defaultHgt), (box6_left = active_top2_set3_left), (box6_top =
							                                                                                                                 box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

								                  (create_animate()));
						                  break;

					                  case 'box3':
						                  return ( //taget box 3
							                  (box1_width = taget_animateWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = taget_animateWgt), (box2_height = defaultHgt), (box2_left = active_top3_set2top_left), (box2_top = box1_default_top),

								                  (box3_width = animateWgt), (box3_height = animateHgt), (box3_left = active_top3_left), (box3_top = box1_default_top),

								                  (box4_width = notaget_animateWgt), (box4_height =
							                                                          defaultHgt), (box4_left = box1_default_left), (box4_top =
							                                                                                                         box2_default_top),

								                  (box5_width = notaget_animateWgt), (box5_height =
							                                                          defaultHgt), (box5_left = active_top3_left_bot2), (box5_top =
							                                                                                                             box2_default_top),

								                  (box6_width = notaget_animateWgt), (box6_height =
							                                                          defaultHgt), (box6_left = active_top3_left_bot3), (box6_top =
							                                                                                                             box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),


								                  (create_animate()));
						                  break;

					                  case 'box4':
						                  return ( //taget box 4
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

								                  (box4_width = animateWgt), (box4_height = animateHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = taget_animateWgt), (box5_height = defaultHgt), (box5_left = box1_set_left2_top), (box5_top = box2_default_top),

								                  (box6_width = taget_animateWgt), (box6_height = defaultHgt), (box6_left = box1_set_left3_top), (box6_top = box2_default_top),

								                  (box7_width = notaget_animateWgt), (box7_height =
							                                                          defaultHgt), (box7_left = box1_set_left1_bot), (box7_top =
							                                                                                                          box3_default_top),

								                  (box8_width = notaget_animateWgt), (box8_height =
							                                                          defaultHgt), (box8_left = box1_set_left2_bot), (box8_top =
							                                                                                                          box3_default_top),

								                  (box9_width = notaget_animateWgt), (box9_height =
							                                                          defaultHgt), (box9_left = box1_set_left3_bot), (box9_top =
							                                                                                                          box3_default_top),

								                  (create_animate()));
						                  break;

					                  case 'box5':

						                  return ( //taget box 5
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top), (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),


								                  (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = animateWgt), (box5_height = animateHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

								                  (box6_width = active_top2_set3_width), (box6_height =
							                                                              defaultHgt), (box6_left = active_top2_set3_left), (box6_top =
							                                                                                                                 box2_default_top),

								                  (box7_width = active_bot2_width), (box7_height =
							                                                         defaultHgt), (box7_left = box1_default_left), (box7_top =
							                                                                                                        box3_default_top),

								                  (box8_width = active_bot2_width), (box8_height =
							                                                         defaultHgt), (box8_left = active_top2_set2bot_left), (box8_top =
							                                                                                                               box3_default_top),

								                  (box9_width = active_top2_set3_width), (box9_height =
							                                                              defaultHgt), (box9_left = active_top2_set3_left), (box9_top =
							                                                                                                                 box3_default_top),


								                  (create_animate()));
						                  break;

					                  case 'box6':
						                  return ( //taget box 6
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top), 							        (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

								                  (box4_width = taget_animateWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = taget_animateWgt), (box5_height = defaultHgt), (box5_left = active_top3_set2top_left), (box5_top = box2_default_top),

								                  (box6_width = animateWgt), (box6_height = animateHgt), (box6_left = active_top3_left), (box6_top = box2_default_top),


								                  (box7_width = notaget_animateWgt), (box7_height =
							                                                          defaultHgt), (box7_left = box1_default_left), (box7_top =
							                                                                                                         box3_default_top),

								                  (box8_width = notaget_animateWgt), (box8_height =
							                                                          defaultHgt), (box8_left = active_top3_left_bot2), (box8_top =
							                                                                                                             box3_default_top),

								                  (box9_width = notaget_animateWgt), (box9_height =
							                                                          defaultHgt), (box9_left = active_top3_left_bot3), (box9_top =
							                                                                                                             box3_default_top),


								                  (create_animate()));
						                  break;



					                  case 'box7':
						                  return ( //taget box 7
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

								                  (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

								                  (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),




								                  (create_animate()));
						                  break;

					                  case 'box8':
						                  return ( //taget box 8
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

								                  (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

								                  (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),




								                  (create_animate()));
						                  break;

					                  case 'box9':
						                  return ( //taget box 9
							                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

								                  (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

								                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

								                  (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

								                  (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

								                  (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

								                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

								                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

								                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),




								                  (create_animate()));
						                  break;



					                  default:
						                  break;
				                  }
			                  }

		                  });

	                  var create_animate = function()
	                  {
		                  $('#box1').stop(true, true).animate(
			                  {
				                  width: box1_width,
				                  height: box1_height,
				                  left: box1_left,
				                  top: box1_top
			                  });
		                  $('#box2').stop(true, true).animate(
			                  {
				                  width: box2_width,
				                  height: box2_height,
				                  left: box2_left,
				                  top: box2_top
			                  });
		                  $('#box3').stop(true, true).animate(
			                  {
				                  width: box3_width,
				                  height: box3_height,
				                  left: box3_left,
				                  top: box3_top
			                  });
		                  $('#box4').stop(true, true).animate(
			                  {
				                  width: box4_width,
				                  height: box4_height,
				                  left: box4_left,
				                  top: box4_top
			                  });
		                  $('#box5').stop(true, true).animate(
			                  {
				                  width: box5_width,
				                  height: box5_height,
				                  left: box5_left,
				                  top: box5_top
			                  });
		                  $('#box6').stop(true, true).animate(
			                  {
				                  width: box6_width,
				                  height: box6_height,
				                  left: box6_left,
				                  top: box6_top
			                  });



		                  $('#box7').stop(true, true).animate(
			                  {
				                  width: box7_width,
				                  height: box7_height,
				                  left: box7_left,
				                  top: box7_top
			                  });
		                  $('#box8').stop(true, true).animate(
			                  {
				                  width: box8_width,
				                  height: box8_height,
				                  left: box8_left,
				                  top: box8_top
			                  });
		                  $('#box9').stop(true, true).animate(
			                  {
				                  width: box9_width,
				                  height: box9_height,
				                  left: box9_left,
				                  top: box9_top
			                  });
	                  }
	                  $('.list-wrapper').bind(
		                  {
			                  mouseleave: function()
			                  {
				                  return (

					                  (box1_width = defaultWgt), (box1_height = defaultHgt), (box1_left = box1_default_left), (box1_top = box1_default_top),

						                  (box2_width = defaultWgt), (box2_height = defaultHgt), (box2_left = box2_default_left), (box2_top = box1_default_top),

						                  (box3_width = defaultWgt), (box3_height = defaultHgt), (box3_left = box3_default_left), (box3_top = box1_default_top),

						                  (box4_width = defaultWgt), (box4_height = defaultHgt), (box4_left = box1_default_left), (box4_top = box2_default_top),

						                  (box5_width = defaultWgt), (box5_height = defaultHgt), (box5_left = box2_default_left), (box5_top = box2_default_top),

						                  (box6_width = defaultWgt), (box6_height = defaultHgt), (box6_left = box3_default_left), (box6_top = box2_default_top),

						                  (box7_width = defaultWgt), (box7_height = defaultHgt), (box7_left = box1_default_left), (box7_top = box3_default_top),

						                  (box8_width = defaultWgt), (box8_height = defaultHgt), (box8_left = box2_default_left), (box8_top = box3_default_top),

						                  (box9_width = defaultWgt), (box9_height = defaultHgt), (box9_left = box3_default_left), (box9_top = box3_default_top),

						                  (create_animate()));
			                  }
		                  });
                  });