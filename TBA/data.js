function getRequest(request, callback) {
  var requester = new XMLHttpRequest();

  requester.open("GET",request,true);
  requester.send(null);

  requester.onreadystatechange = function() {
    if (requester.readyState == 4 && requester.status == 200) {
       callback(JSON.parse(requester.responseText));
    }
  }
}

function getTeamData(team_number) {
  
}
