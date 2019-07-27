'use strict';

/* globals TypeWriter */

$(function(){
  TypeWriter.type();

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('#ice-breaker li').on('click', () => {
      $( this ).find('p').slideToggle();
    }, function() {
      $( this ).find('p').slideToggle();
    });  
  } else {
    $('#ice-breaker li').hover(function() {
      $( this ).find('p').slideToggle();
    }, function() {
      $( this ).find('p').slideToggle();
    });
  }

  
});