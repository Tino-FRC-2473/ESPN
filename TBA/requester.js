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
	requestTeamsAtEvent(getEvent().key, updateTeams);
	requestEvent(getEvent().key, updateEvent);
}

function updateData() {
	console.log("");
	requestMatchesAtEvent(getEvent().key, updateMatches);
	requestRankingsAtEvent(getEvent().key, updateRankings);
	requestStatsAtEvent(getEvent().key, updateStats);

	//below portion of code BESIDES UPDATELOADER IS FOR TESTING
	//without timeouts, returns error stopping entire code due to the stats part of getTeamData and undef
	//in actual code this will be called after search, after the initialUpdateData, making it not matter
	// setTimeout(function(){
	//     var n = 1986;
	// 	console.log(n + " data for " + getEvent().key);
	// 	console.log(getTeamData(n));
	// 	console.log("");
	// }, 2500);

	// setTimeout(function(){
	//     userEventChange("2017cada");
	// }, 7500);
	
	//IMPORTANT DONT DELETE
	updateLoader();
}

function updateMatches(data) {
	setMatches(parseMatches(data));
	console.log("matches");
	console.log(getMatches());
	console.log("");
}

//TODO: deep
//rankings came w the header which was a pain to deal w to sort, so i just took it out
//might need it for headers
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

//CARE: deleted some match data
function parseMatches(matches) {
	for(var i = 0; i < matches.length; i++) {
		delete matches[i].event_key;
		delete matches[i].videos;
		delete matches[i].time_string;
		delete matches[i].set_number;
	}
	return matches;
}