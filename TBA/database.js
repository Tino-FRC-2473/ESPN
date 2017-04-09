//updated upon refresh
var matches = [];
var stats = {};
var rankings = [];

//updated at start
var teams = [];
var event = {};

var defaultKey = "2017casj";

function getMatches() {
  return matches;
}

function setMatches(matchData) {
  matches = matchData;
}

function getTeams() {
  return teams;
}

function setTeams(teamData) {
  teams = teamData;
}

function getStats() {
  return stats;
}

function setStats(statData) {
  stats = statData;
}

function getRankings() {
  return rankings;
}

function setRankings(rankingData) {
  rankings = rankingData;
}

function getEventKey() {
	if(getEvent().key == null) {
		console.log("default");
		console.log(event);
		return defaultKey;
	} else {
		console.log(".");
		return event.key;
	}
}

//TODO: deep
//if change event, update immediately
//am i right? or wrong?
function setEventKey(key) {
	eventKey = key;
	initialUpdateData();
}

function setEvent(eventData) {
	console.log("event set");
	console.log(eventData);
	event = eventData;
}

function getEvent() {
	return event;
}