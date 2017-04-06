$(document).ready(function() {
  $("#search").keypress(function(event) {
    if(event.which == 13) {
      search($("#search").val());
    }
  });
});

//background code
var statpool = ["rank", "team", "score",	"points",	"auto",	"rotor", "touchpad", "pressure", "w",	"l", "t",	"dq",	"gp",	"rp"];
var teampool = ["2473", "1065", "1021", "435", "846", "115"];

function search(search) {
  search = search.toLowerCase();
  var searchArr = search.split(" ");

  if(lastEl(containsRequest("smart rank by <stat>", searchArr))) {
    var el = containsRequest("smart rank by <stat>", searchArr); //not completed
    updateTable(smartRank(el[3]));
  } else if(lastEl(containsRequest("rank by <stat>", searchArr))) {
    var el = containsRequest("rank by <stat>", searchArr); //completed
    updateTable(rank(el[2]));
  } else if(lastEl(containsRequest("<team#> <stat>", searchArr))) {
    var el = containsRequest("<team#> <stat>", searchArr); //not completed
    updateTable(findAndHighlight(el[0], el[1]));
  } else if(lastEl(containsRequest("<team#>", searchArr)[0])) {
    var el = containsRequest("<team#>", searchArr); //not completed
    updateTable(teamData(el[0]));
  } else {
    updateTable("none");
  }
}

function containsRequest(request, search) {
  request = request.toLowerCase();
  var split = request.split(" ");
  var length = split.length;

  var arr = [];
  var returner = false;
  for(var i = 0; i < search.length - length + 1; i++) {
    var results = [];
    var phrase = [];

    for(var x = 0; x < length; x++) { //loop through current section of search to find a match
      if(split[x] == "<stat>") {
        results.push(isStat(search[x + i]));
        if(isStat(search[x + i])) phrase.push(search[x + i]);
      } else if(split[x] == "<team#>") {
        results.push(isTeam(search[x + i]));
        if(isTeam(search[x + i])) phrase.push(search[x + i]);
      } else {
        results.push(split[x] == search[x + i]);
        if(split[x] == search[x + i]) phrase.push(search[x + i]);
      }
    }

    if(results.indexOf(false) == -1) {
      for(var i = 0; i < phrase.length; i++) {
        arr.push(phrase[i]);
      }
      returner = true;
      break;
    }
  }

  arr.push(returner);
  return arr;
}

function isStat(potentialStat) {
  return statpool.indexOf(potentialStat) != -1;
}

function isTeam(potentialTeam) {
  return teampool.indexOf(potentialTeam) != -1;
}

function lastEl(arr) {
  return arr[arr.length - 1];
}
