const dt = new Date('2020-12-08T15:00:00');

const day = dt.getTime();
const toDay = Math.floor(day / 1000);

const startAt = toDay;
const registerAt = toDay;
const updatateAt = toDay;

const nextYearDay = Date.parse(new Date(dt.getFullYear() + 1, dt.getMonth(), dt.getDate() + 1));
console.log(dt);
console.log(new Date(dt.getFullYear() + 1, dt.getMonth(), dt.getDate() + 1));
const expireAt = Math.floor(nextYearDay / 1000);


const nextMonthDay = Date.parse(new Date(dt.getFullYear(), dt.getMonth() + 2, 0));
const paymentExpireAt = Math.floor(nextMonthDay / 1000);

console.log(startAt);
console.log(typeof startAt);
console.log(expireAt);
console.log('paymentExpireAt:', paymentExpireAt);


// 下記上記の解説

// Dateオブジェクトを作成
var date = new Date() ;
// UNIXタイムスタンプを取得する (ミリ秒単位)
var a = date.getTime() ;
// UNIXタイムスタンプを取得する (秒単位 - PHPのtime()と同じ)
var b = Math.floor( a / 1000 ) ;

console.log(b)