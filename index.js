'use strict';

/* globals TypeWriter */

$(function(){
  TypeWriter.type();

  $('#ice-breaker li').hover(function() {
    $(this).find('p').removeClass('hidden');
  }, function() {
    $(this).find('p').addClass('hidden');
  });
});