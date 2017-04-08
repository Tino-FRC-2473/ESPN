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


/*function requestTeamsAtTourn(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/teams",
		callback);
}

function requestTeamDataAtTourn(team_key, event_key, callback) {
	request(baseUrl + "team/" + team_key + "/event/" + event_key + "/matches",
		callback);
}*/

function requestMatchesAtTourn(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/matches",
		callback);
}

function requestRankingsAtTourn(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/rankings",
		callback);
}

function requestStatsAtTourn(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/stats",
		callback);
}

function updateData() {
	console.log("");
	requestMatchesAtTourn(getEventKey(), updateMatches);
	requestRankingsAtTourn(getEventKey(), updateRankings);
	requestStatsAtTourn(getEventKey(), updateStats);

	var n = 2473;
	console.log(n + " team data");
	console.log(getTeamData(n));
	console.log("");
	updateLoader();
}

function updateMatches(data) {
	setMatches(data);
	console.log("matches");
	console.log(getMatches());
	console.log("");
}

function updateRankings(data) {
	setRankings(data);
	console.log("rankings");
	console.log(getRankings());
	console.log("");
}

function updateStats(data) {
	setStats(data);
	console.log("stats");
	console.log(getStats());
	console.log("");
}