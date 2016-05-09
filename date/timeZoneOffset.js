var d1 = new Date(2009, 0, 1); 
var d2 = new Date(2009, 6, 1);
var TimeZone;
if(d1.getTimezoneOffset() == d2.getTimezoneOffset()){//非夏令时
	TimeZone = 0-(d1.getTimezoneOffset()/60);
}else{//实行夏令时    		
	if(d1.getTimezoneOffset()>d2.getTimezoneOffset()){//北半球
		TimeZone = 0-(d1.getTimezoneOffset()/60);
	}else{//南半球
		TimeZone = 0-(d2.getTimezoneOffset()/60);
	}	
}
alert(TimeZone);
