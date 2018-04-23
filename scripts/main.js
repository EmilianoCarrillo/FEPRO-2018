// COUNTDOWN TIMER
var deadline = new Date("Sep 13, 2018 10:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("dias").innerHTML = days + " días";
document.getElementById("horas").innerHTML = hours + " horas";
document.getElementById("minutos").innerHTML = minutes + " minutos";
}, 1000);



//
// /*VIDEO ON SCROLL*/
// // select video element
// var vid = document.getElementById('video');
// var time = $('#time');
// var scroll = $('#scroll');
// var windowheight = $(window).height()-20;
//
//
// var scrollpos = window.pageYOffset/400;
// var targetscrollpos = scrollpos;
// var accel = 0;
//
//
// // ---- Values you can tweak: ----
// var accelamount = 1; //How fast the video will try to catch up with the target position. 1 = instantaneous, 0 = do nothing.
//
// // pause video on load
// vid.pause();
//
// window.onscroll = function(){
//     //Set the video position that we want to end up at:
//     targetscrollpos = window.pageYOffset/400;
//
//     //move the red dot to a position across the side of the screen
//     //that indicates how far we've scrolled.
//     scroll.css('top', 10+(window.pageYOffset/13500*windowheight));
// };
//
//
// setInterval(function(){
//
//       //Accelerate towards the target:
//       scrollpos += (targetscrollpos - scrollpos)*accelamount;
//
//       //move the blue dot to a position across the side of the screen
//       //that indicates where the current video scroll pos is.
//
//       //update video playback
//       vid.currentTime = scrollpos;
//       vid.pause();
//
// }, 40);
