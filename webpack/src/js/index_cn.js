import '../css/bootstrap.css';
import '../css/index.css';
import $ from 'jquery';
import '../js/bootstrap.min.js';
import '../js/jquery.countdown.js';
import '../js/jquery.easing.min.js';
import './wave.js';
//import md5 from 'js-md5';
(function() {
  "use strict";

  //scrolling-nav.js
  $('body').show();
 

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

  //modal
//   if(localStorage.getItem('privateKey') === null){
//   var privateNum = Math.round(Math.random(0,10000)*10000).toString(); 
//   var privateKey = md5(privateNum);
//   localStorage.setItem('privateKey',privateKey);
// }else {
//   $('#private-key').val(localStorage.getItem('privateKey'));
//}
$('#btc-addr').val('16iqQ4gcKJcdMBENedUhi5ww8oh3in7T5U');
$('#eth-addr').val('0x00F3a9E14Fda469aBce54Befe371162928a7c700');

  $('#join').click(function() {
    //$('#join-sale-note').modal('hide');
    $('#join-sale').modal('toggle');
  });
  var endDate = new Date("2017-08-18 00:00:00");
  
  var now = new Date();
   if(now < endDate) {
    $('.token-sale').click(function() {
    $('#no-sale').modal();
  })
  }else {
    $('.logo-img').hide();
    $('.logo-word').hide();
    $('.common-title-font').hide();
    $('.table').show();
    $('.progress').show();
    $('.dtc-btn-margin').addClass("btn-margin-table");
    $('.span12 h2').text('ICO 火热进行中...');
    $('.span12 p').text(' ICO 结束时间将在9月18号.');
    endDate = new Date("2017-09-18 00:00:00");
    $('.token-sale').click(function() {
    $('#join-sale-note').modal();
  });
  }
  var leftTime = endDate.valueOf();
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