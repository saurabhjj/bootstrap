/*

My Custom JS
============
7
Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function(){

  var functionOne = function() {
    $('#ironDetails').hide();
    $('#myHolding').hide();
    $('#bankDetails').hide();
    $('#infoDetails').hide();
  };

  $('#infoStock').click(function(e){
    e.preventDefault();
    functionOne();
    $('#infoDetails').slideDown();

  });

  $('#myholdingDetails').click(function(e){
    e.preventDefault();
    functionOne();
    $('#myHolding').slideDown();

  });

  $('#ironStock').click(function(e){
    e.preventDefault();
    functionOne();
    $('#ironDetails').slideDown();
  });

  $('#bankStock').click(function(e){
    e.preventDefault();
    functionOne();
    $('#bankDetails').slideDown();
  });

  $('a.pop').click(function(e){
      e.preventDefault();
  });

  $('a.pop').popover();

//  $('[rel="tooltip"]').tooltip();

});
