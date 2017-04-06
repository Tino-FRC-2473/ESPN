$(window).resize(function() {
  initialize();
});
$(document).ready(function() {
  initialize();
});
function initialize() {
  alignByWidth("bal");
  alignByKnownWidth("invite",$("#bal").outerWidth());
  alignByTopBar("tab_nav");
}
function alignByWidth(id) {
  id = "#" + id;
  var width = $(id).outerWidth();
  var screen = $(window).width();
  var left = (screen-width)/2;
  $(id).css({
    marginLeft: left
  });
}
function alignByKnownWidth(id, width) {
  id = "#" + id;
  var screen = $(window).width();
  var left = (screen-width)/2;
  $(id).css({
    marginLeft: left
  });
}
function addRow(arr, added) {
  if(arr.length == 14) {
    var row = "";
    if(added) {
      row = "<tr class='added'>";
    } else {
      row = "<tr class'not'>";
    }
    for(var i = 0; i < 8; i++) {
      row += "<td class='content'>" + arr[i] + "</td>";
    }
    for(var i = 8; i < 11; i++) {
      row += "<td class='content record'>" + arr[i] + "</td>";
    }
    for(var i = 11; i < arr.length; i++) {
      row += "<td class='content'>" + arr[i] + "</td>";
    }
    row += "</tr>";
    $('#table').append(row);
  }
}
function alignByTopBar(id) {
  id = "#" + id;
  var top = $("#top_bar").outerHeight() + "px";
  $(id).css({
    top: top
  });
}
