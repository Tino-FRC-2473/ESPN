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


function requestMatchesAtEvent(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/matches",
		callback);
}

function requestRankingsAtEvent(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/rankings",
		callback);
}

function requestStatsAtEvent(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/stats",
		callback);
}

function requestTeamsAtEvent(event_key, callback) {
	request(baseUrl + "event/" + event_key + "/teams",
		callback);
}

function requestEvent(event_key, callback) {
	request(baseUrl + "event/" + event_key,
		callback);
}

function initialUpdateData() {
	updateData();
	requestTeamsAtEvent(getEventKey(), updateTeams);
	requestEvent(getEventKey(), updateEvent);
}

function updateData() {
	console.log("");
	requestMatchesAtEvent(getEventKey(), updateMatches);
	requestRankingsAtEvent(getEventKey(), updateRankings);
	requestStatsAtEvent(getEventKey(), updateStats);

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

//TODO: deep
//rankings came w the header which was a pain to deal w to sort, so i just took it out
//delete this comment or msg me after you see it
function updateRankings(data) {
	var header = data.shift();
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

function updateTeams(data) {
	setTeams(data);
	console.log("teams");
	console.log(getTeams());
	console.log("");
}

function updateEvent(data) {
	setEvent(data);
	console.log("event");
	console.log(getEvent());
	console.log("");
}