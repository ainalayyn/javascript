arr = [ "a,b,c", "d", "e" ];
var abc = arr.splice(0,1);
var abc2Arr = abc.toString().split(',');
res = abc2Arr.concat(arr); console.log(res);