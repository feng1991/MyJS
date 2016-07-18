
//帮助对象
var help = {};

(function($){

	//计数器(闭包机制)
	var count = 0;
	$.count = function(){
		return ++count;
	}

	//区间随机数
	$.mt_rand = function(min,max){
		if(arguments.length == 1){
			max = min;
			min = 1;
		}
		return min + Math.floor( Math.random() * (max-min) );
	}


})(help);

