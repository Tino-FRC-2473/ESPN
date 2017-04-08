function getTeamData(team_num) {
	var key = "frc"+team_num;
	var allMatches = getMatches();
	var matches = [];

	for(var i = 0; i < allMatches.length; i++) {
		var m = allMatches[i];
		for(var j = 0; j < 3; j++) {
			if(m.alliances.blue.teams[j] == key || m.alliances.red.teams[j] == key) {
				matches.push(m);
				break;
			}
		}
	}

	matches.sort(function compare(a, b) {
		return a.time - b.time;
	});

	return matches;
}

function handleTeamMatchData(arr) {

	console.log(matches);
	teamDataStep1(matches);
}

function teamDataStep1(matches) {
	var teamSummary = {};
	teamSummary.numFourRotors = 0;
	teamSummary.numKpaReached = 0;
	teamSummary.numMatches = matches.length;

	for(var i = 0; i < matches.length; i++) {
		if(matches[i].numRotors == 4) {
			teamSummary.numFourRotors++;
		}
		if(matches[i].scores.kpa >= 40) {
			teamSummary.numKpaReached++;
		}
	}

	teamSummary.data = [];

			requestStatsAtTourn(eventId, store); //request data and run store method on data
			var r1 = getData();
			console.log("r1");
			console.log(r1);

			requestRankingsAtTourn(eventId, store);
			var r2 = getData();
			console.log("r2");
			console.log(r2);

			requestTeamsAtTourn(eventId, store);
			var r3 = getData();
			console.log("r3");
			console.log(r3);

			console.log("teamSummary");
			console.log(teamSummary);
		}

		function parseMatchData(obj, team) {
			var toReturn = {};

			var side;
			var oSide;
			for(var i = 0; i < 3; i++) {
				if(team == obj.alliances.blue.teams[i]) {
					side = "blue";
					oSide = "red";
				} else if(team == obj.alliances.red.teams[i]) {
					side = "red";
					oSide = "blue";
				}
			}


			toReturn.match_number = obj.match_number;
			toReturn.result = (obj.alliances[side].score > obj.alliances[oSide].score)
			? "W"
			: (obj.alliances[side].score < obj.alliances[oSide].score)
			? "L"
			: "T";
			toReturn.score = obj.alliances[side].score;

			toReturn.scores = {};
				toReturn.scores.kpaAuto = obj.score_breakdown[side].autoFuelPoints;
				toReturn.scores.kpaTeleop = obj.score_breakdown[side].teleopFuelPoints;
				toReturn.scores.kpaTotal = toReturn.scores.kpaAuto + toReturn.scores.kpaTeleop;

				toReturn.scores.touchpad = obj.score_breakdown[side].teleopTakeoffPoints;

				toReturn.scores.rotorAuto = obj.score_breakdown[side].autoRotorPoints;
				toReturn.scores.rotorTeleop = obj.score_breakdown[side].teleopRotorPoints;
				toReturn.scores.rotorTotal = toReturn.scores.rotorAuto + toReturn.scores.rotorTeleop;

				toReturn.scores.mobility = ((obj.score_breakdown[side].robot1Auto == "Mobility")?5:0)+
											((obj.score_breakdown[side].robot2Auto == "Mobility")?5:0)+
											((obj.score_breakdown[side].robot3Auto == "Mobility")?5:0);

				toReturn.scores.bonuses = obj.score_breakdown[side].rotorBonusPoints + obj.score_breakdown[side].kPaBonusPoints;
				toReturn.scores.fouls = obj.score_breakdown[side].foulPoints;
				toReturn.scores.adjustments = obj.score_breakdown[side].adjustPoints;
			
			toReturn.numRotors = obj.score_breakdown[side].rotor1Engaged + obj.score_breakdown[side].rotor2Engaged + obj.score_breakdown[side].rotor3Engaged + obj.score_breakdown[side].rotor4Engaged;

			return toReturn;
		}