const st = "　　東京都 新宿区新宿1-1-1　　"; //前後に全角空白２つ

const countWordsWithSpaces = st => st.trim().split(/\s+/).length;
// console.log()

var arr = ["apple","I like apple."];
console.log(arr);

var work1 = arr => arr.replace(/\,/g, ' ');
console.log(arr);
var work2 = work1 => work1.replace(/\./g, ' ');
console.log(arr);

var work_array = work2.split(' ');

var len = work_array.length - 1;
var i;
for(i = len; i >= 0; i--){
    if(work_array[i] == ""){
        work_array.splice(i,1);
    }
}
console.log(i);


// var count = work_array.length;
// .trim(
// // 4を出力
// console.log(st.trim().split(/\s+/).length);

