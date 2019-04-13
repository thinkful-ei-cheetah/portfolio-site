'use strict';

/* globals TypeWriter */

$(function(){
  TypeWriter.type();

  $('#ice-breaker li').hover(function() {
    $( this ).find('p').slideToggle();
  }, function() {
    $( this ).find('p').slideToggle();
  });
});