//updated upon refresh
var matches = [];
var stats = {};
var rankings = [];

//updated at start
var teams = [];
var event = {};
//default starting key
event.key = "2017wila";

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

//TODO: deep
//if change event, update immediately
//am i right? or wrong?
function userEventChange(key) {
	console.log("USER EVENT_KEY CHANGE TO " + key);
	event.key = key;
	initialUpdateData();
}

function setEvent(eventData) {
	event = eventData;
}

function getEvent() {
	// console.log("get event");
	// console.log(event);
	return event;
}