var run = function(){

var x = 3;

var func1 = function(x){
	x=x*2;
	return x;
}

var func2 = function(x){
	x=x+42;
	return x;
}

var func3 = function(x){
	x=x%3;
	return x;
}

document.getElementById('crazy').innerHTML = func1(func2(func3(x)));

return null;
}