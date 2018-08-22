
//帮助对象
var help = {};

(function($){

	//计数器
	var count = function(){
		var count = 0;
		return function(){
			return ++count;
		}
	}
	$.count = count();


	//区间随机数
	$.mt_rand = function(min,max){
		if(arguments.length == 1){
			max = min;
			min = 1;
		}
		return min + Math.floor( Math.random() * (max-min) );
	}


	//类型判断
	var typeArr = ['Array','String','Number','Boolean','Date','Function','Object'];
	for(var i = 0;i < typeArr.length;i++){
		(function(i){
			$['is'+typeArr[i]] = function(obj){
				return Object.prototype.toString.call(obj) == '[object '+typeArr[i]+']';
			}
		})(i);
	}


	//单例模式,fn为构造函数
	var getSingle = function(fn){
		var obj = null;
		return function(){
			return obj || (obj = fn.apply(this,arguments));	
		}
	};
	//var createSomething = getSingle(function(){
		//creating an object
	//})

})(help);

