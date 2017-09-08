function fivaa(rowNum) {
	var arr = [];
    for (i = rowNum - 1; i >= 0; i--) {
		// Part1 is the first two number, Part2 is the rest
		var part1 = i.toString() + i.toString();
		var part2 = new Array(i + 1).fill(i + 2).join('');
		var val = part1 + part2;
		console.log(val);
    }
}

// Input is row number
fivaa(5);