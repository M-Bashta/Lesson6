function show(date){
    console.log(date);
}

////////||||||||
//function checkAge(age) { 
//    var check = age >= 18  || 'Do You have permission?';
//    return check;
//};
//
//
//show(checkAge(17));
//
//////??????
//
//function checkAge(age) { 
//    age >= 18 ? show('true') : show('Do You have permission?') ;
//  
//};
//
//
//show(checkAge(20));

///Min values
function min(values) {
	var minValues = values[0];
	for (var i = 0; i < values.length; i++) {
		if (minValues > values[i+1]) {
			minValues = values[i+1];
		}
	};
	return minValues;
}

var values = [10, 2, -18, 27, 237, 0]

show(min(values));
