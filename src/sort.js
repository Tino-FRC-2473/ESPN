function sortByStat(arr, str) {
	var idx = idxOfStat(str);

	var isAscending = (str == "rank" || str == "team");
	if(idx != -1) {
		arr.sort(function compare(a, b) {
			var diff = a[idx] - b[idx];
			if(isAscending) {
				return diff;
			} else {
				return -diff;
			}
		});
	}
}

function idxOfStat(str) {
	var base = ["rank", "team", "score",	"points",	"auto",	"rotor", "touchpad", "pressure", "w",	"l", "t",	"dq",	"gp",	"rp"];

	for(var i = 0; i < base.length; i++) {
		if(str == base[i]) {
			return i;
		}
	}
	return -1;
}
