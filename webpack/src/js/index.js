import '../css/bootstrapmin.css';
import $ from 'jquery';
import '../js/bootstrap.min.js';
import '../js/jquery.countdown.js';
import '../js/jquery.easing.min.js';
import './wave.js';
(function() {
  "use strict";

  //scrolling-nav.js

  $(window).scroll(function() {
    $('.navbar-fixed-top').toggleClass('shrink', $(document).scrollTop() > 60);
    $('.navbar-fixed-top').removeClass('dtc-nav-bg', $(document).scrollTop() > 60);
    $('.navbar-fixed-top').toggleClass('dtc-nav-bg', $(document).scrollTop() < 60);
  })
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
  $('.token-sale').click(function() {
    $('#join-sale-note').modal();
  });

  $('#join').click(function() {
    $('#join-sale-note').modal('hide');
    $('#join-sale').modal();
  });
  var endDate = new Date("2017-08-06 00:00:00");
  var leftTime = endDate.valueOf();
  var now = new Date();
  var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
  $('.timer').countdown(leftTime, function(event) {
    var $this = $(this);
    switch (event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      case "weeks":
      case "daysLeft":
        $this.find('span.' + event.type).html(event.value);
        break;
      case "finished":
        $this.hide();
        break;
    }
  });


  //wave.js



}());