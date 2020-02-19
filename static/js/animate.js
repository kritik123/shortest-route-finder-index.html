$(function() {
  $('.navbar-brand').addClass('big');
  $('.animated').css('opacity', 0);
  var waypoint = new Waypoint({
      element: document.getElementById('what-we-do'),
      handler: function(direction) {
          $('#what-we-do .animated').addClass('fadeInUp');
      },
      offset: '60%'
  });
  var howWeDo = new Waypoint({
      element: document.getElementById('way-we-do'),
      handler: function(direction) {
          $('#way-we-do .animated').addClass('fadeInUp');
      },
      offset: '60%'
  });
  var howWeDel = new Waypoint({
      element: document.getElementById('way-we-deliver'),
      handler: function(direction) {
          $('#way-we-deliver .animated').addClass('fadeInUp');
      },
      offset: '60%'
  });
  var infra = new Waypoint({
      element: document.getElementById('infra'),
      handler: function(direction) {
          $('#infra .left').addClass('fadeInRight');
          $('#infra .right').addClass('fadeInLeft');
      },
      offset: '60%'
  });
  var mine = new Waypoint({
      element: document.getElementById('mine'),
      handler: function(direction) {
          $('#mine .left').addClass('fadeInRight');
          $('#mine .right').addClass('fadeInLeft');
      },
      offset: '60%'
  });
  var util = new Waypoint({
      element: document.getElementById('util'),
      handler: function(direction) {
          $('#util .left').addClass('fadeInRight');
          $('#util .right').addClass('fadeInLeft');
      },
      offset: '60%'
  });
  var agri = new Waypoint({
      element: document.getElementById('agri'),
      handler: function(direction) {
          $('#agri .left').addClass('fadeInRight');
          $('#agri .right').addClass('fadeInLeft');
      },
      offset: '60%'
  })
  $('.pin-hover').click(function() {
      var pin = $(this).parent().find('.pin-dialog');
      if (pin.is(":visible")) {
          pin.fadeOut();
      } else {
          $('.pin-dialog').fadeOut();
          pin.fadeIn();
      }
  });
  $(document).click(function(event) {
      var $trigger = $('.pin-hover');
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
          $(".pin-dialog").fadeOut();
      }
  });
});
