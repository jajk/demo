/*
    var url = '/status_tracker.php';
	var params = [
		'step=2',
		'time=1248027314'
	];
	(new Image()).src = url + '?' + params.join('&');
*/
var url = '/status_tracker.php';
var params = [
    'step=2',
	'time=1248027314'
];
var beacon = new Image();
beacon.src = url +'?'+params.join('&');
beacon.onload = function(){
	if(this.width == 1){
		//Success
	}else if(this.width == 2){
		//Failure;create another beacon and try again
	}
};
beacon.onerror = function(){
	//Error;wait a bit,then create another beacon and try again
};