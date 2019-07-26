var a = 'ABC123あいう';// in 15 bytes UTF-8
var tbl = [ 0, 1, 1, 1, 2, 3, 2, 3, 4, 3 ];
var len = 0;
for (i = 0; i < a.length; i++)
len += tbl [encodeURIComponent(a.charAt(i)).length];
console.log(len);


console.log(Buffer.byteLength('buffer', 'ascii'));
