 function getUTCtime(date) {
	var day = date.split(/[-:\s]/);
	var my_date = new Date(day[0], parseInt(day[1]) - 1, day[2], day[3], day[4], day[5]);
	var str = my_date.toUTCString();
	var time = str.split(",")[1].split(" ");
	var d = time[1];
	var mon = time[2];
	var year = time[3];
	var hour_min = time[4].split(":");
	var mon_array = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	for (var i = 0; i < 12; i++) {
		if (mon == mon_array[i]) {
			mon = i;
			break;
		}
	}
	var x = new Date(year, mon, d, hour_min[0], hour_min[1], hour_min[2]);       
	var UTC = x.getTime();
	return UTC;
}
