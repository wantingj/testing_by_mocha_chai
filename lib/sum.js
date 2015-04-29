exports.fromArray = function(numbers){
	var sum = 0;
	if(numbers instanceof Array){    
		for(var i in numbers){
			if(typeof numbers[i] == 'number'){
				sum += numbers[i];        
			}else{
				throw 'element type error';
			}
		}
	}else{
		throw 'input not array';
	}
	return sum;
}