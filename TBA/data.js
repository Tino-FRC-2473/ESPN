var baseUrl = "https://www.thebluealliance.com/api/v2/";

function request(request, callback) {
  $.ajax({
      headers: {'X-TBA-App-Id': 'deepsethi2473:frcspn:v1'},
      url: request,
      dataType: 'json',
      cache: true
  }).done(callback).fail(function(error) {
  	console.log(error);
  });
}

function requestTeamsAtTourn(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/teams",
		callback);
}

function requestTeamDataAtTourn(team_key, event_key, callback) {
	request(baseUrl + "team/" + team_key + "/event/" + event_key + "/matches",
		callback);
}