var statpool = ["rank", "team", "score",	"points",	"auto",	"rotor", "touchpad", "pressure", "w",	"l", "t",	"dq",	"gp",	"rp"];
var teampool = ["2473", "1002", "481"];

function updateTable(query) {
  if(query != "none") {
    $('.not').hide();
    $('.added').remove();
    for(i in query) {
      addRow(query[i], true);
    }
  }
}

function smartRank(stat) {

}

function rank(stat) {
  var arr = buildList();
  var idx = idxOfStat(stat);
  idx++;
  var key = "#top_row td:nth-child(" + idx + ")";
  var not = "#top_row td:not(" + key + ")";
  $(key).css({
    'background': '#34495e'
  });
  $(not).css({
    'background': '#6C7A89'
  });
  sortByStat(arr, stat);
  return arr;
}

function findAndHighlight(team, stat) {
  var idx = teampool.indexOf(team);
  var arr = [];
  if(idx != -1) {
    $("tr:nth-child(" + (idx + 1) + ") > .content").each(function() {
      console.log($(this).text());
      arr.push($(this).text());
    });
  }
  return arr;
}

function teamData(team) {

}

function buildList() {
  var counter = 1;
  var list = [];
  var push = [];
  $('tr:not(.added) > .content').each(function() {
    push.push($(this).text());
    if(counter%(statpool.length) == 0) {
      list.push(push);
      push = [];
    }
    counter++;
  });
  return list;
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
