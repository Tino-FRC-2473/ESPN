function getTeamData(team_num) {
	var key = "frc"+team_num;
	var data = {};
	data.matches = [];

	var allMatches = getMatches();
	for(var i = 0; i < allMatches.length; i++) {
		var m = allMatches[i];
		for(var j = 0; j < 3; j++) {
			if(m.alliances.blue.teams[j] == key || m.alliances.red.teams[j] == key) {
				data.matches.push(m);
				break;
			}
		}
	}

	data.matches.sort(function compare(a, b) {
		return a.time - b.time;
	});

	data.numFourRotors = 0;
	data.numKpaReached = 0;
	data.numMatches = 0;

	for(var i = 0; i < data.matches.length; i++) {
		var side;
		//var oSide;
		for(var j = 0; j < 3; j++) {
			if(key == data.matches[i].alliances.blue.teams[j]) {
				side = "blue";
				//oSide = "red";
			} else if(key == data.matches[i].alliances.red.teams[j]) {
				side = "red";
				//oSide = "blue";
			}
		}

		if(data.matches[i].score_breakdown != null) {
			data.numMatches++;
			if(data.matches[i].score_breakdown[side].rotor4Engaged) {
				data.numFourRotors++;
			}
			if(data.matches[i].score_breakdown[side].autoFuelPoints + data.matches[i].score_breakdown[side].teleopFuelPoints >= 40) {
				data.numKpaReached++;
			}
		}

	}


	var stats = getStats();
	data.stats = {};
	data.stats.opr = stats.oprs[team_num];
	data.stats.ccwm = stats.ccwms[team_num];
	data.stats.dpr = stats.dprs[team_num];


	var rankings = getRankings();
	data.rank = getPlaceForTeamIn2DArrSortedByCol(rankings, 0, team_num, false);

	data.placings = {};
	data.scores = {};

	data.placings.matchPoints = getPlaceForTeamIn2DArrSortedByCol(rankings, 3, team_num, true);
	data.scores.matchPoints = rankings[data.placings.matchPoints-1][3];

	data.placings.auto = getPlaceForTeamIn2DArrSortedByCol(rankings, 4, team_num, true);
	data.scores.auto = rankings[data.placings.auto-1][4];

	data.placings.rotor = getPlaceForTeamIn2DArrSortedByCol(rankings, 5, team_num, true);
	data.scores.rotor = rankings[data.placings.rotor-1][5];

	data.placings.touchpad = getPlaceForTeamIn2DArrSortedByCol(rankings, 6, team_num, true);
	data.scores.touchpad = rankings[data.placings.touchpad-1][6];

	data.placings.pressure = getPlaceForTeamIn2DArrSortedByCol(rankings, 7, team_num, true);
	data.scores.pressure = rankings[data.placings.pressure-1][7];

	// rankings.sort(function compare(a, b) {
	// 	return b[3] - a[3];
	// });
	// idx = 1;
	// while(rankings[idx-1][1] != team_num) { idx++; }
	// data.placings.match = idx;
	
	// rankings.sort(function compare(a, b) {
	//  	return b[4] - a[4];
	// });
	// idx = 1;
	// while(rankings[idx-1][1] != team_num) { idx++; }
	// data.placings.auto = idx;

	return data;
}

function getPlaceForTeamIn2DArrSortedByCol(arr2D, col, team_num, descending) {
	arr2D.sort(function compare(a, b) {
		if(b[col] != a[col]) {
	 		return ((descending)?1:-1) * (b[col] - a[col]);
	 	} else {
	 		return b[3] - a[3];
	 	}
	});
	var idx = 1;
	while(rankings[idx-1][1] != team_num) { idx++; }

	return idx;
}