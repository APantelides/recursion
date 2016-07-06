// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(typeof obj === "function" || obj === undefined) {
		return;
	} else if (typeof obj === "number") {
		return obj.toString();
	} else if (obj === null) {
		return 'null';
	} else if (typeof obj === "boolean") {
		return obj.toString();
	} else if (typeof obj === "string") {
		return '"' + obj + '"';
	} else if (Array.isArray(obj)) {
		var arr = []

		_.each(obj, function(args){
			arr.push(stringifyJSON(args))
		})

		return '[' + arr + ']';
	} else if (typeof obj === "object") {
		var keys = Object.keys(obj);
		var result = '';
		if(keys.length>0) {

			for (var i = 0; i<keys.length; i++) {
				var key = keys[i];
				if(typeof key === "function" || key === undefined || obj[key] === undefined || typeof obj[key] === "function"){

				} else {

					if(i === keys.length - 1) {
						result += stringifyJSON(key)+':'+stringifyJSON(obj[key])
					} else {
						result += stringifyJSON(key)+':'+stringifyJSON(obj[key])+',';
					}
				}
			} 
			return '{' + result + '}'
		
		} else {
			return '{}'
		}
	}
};
