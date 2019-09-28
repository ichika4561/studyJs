let dt = new Date();
const nextMonthDay1 = new Date(dt.getFullYear(), dt.getMonth() + 2, 1);
const nextMonthDay2 = Date.parse(new Date(dt.getFullYear(), dt.getMonth() + 2, 1));
const paymentExpireAt1 = Math.floor(nextMonthDay2 / 1000);
console.log('参考(本日の日付): ', dt);
console.log('参考(DATEオブジェクト): ', nextMonthDay1);
console.log('参考(UNIXTIME): ', paymentExpireAt1);
console.log('参考(UNIXTIME): ', dt.getUTCHours());

// 参考
let nextMonthDayDate = new Date(dt.getUTCFullYear(), dt.getUTCMonth() + 2, 1);
console.log('UTC日付', nextMonthDayDate);
const nextMonthDayDateUNIX = Date.parse(new Date(dt.getUTCFullYear(), dt.getUTCMonth() + 2, 1));
console.log('UTC日付UNIXTME', nextMonthDayDateUNIX);

// マイナス
let next = new Date(dt.getUTCFullYear(), dt.getUTCMonth() + 2, 1);
console.log('UTC日付マイナス', next);
const nextUNIX = Date.parse(new Date(dt.getUTCFullYear(), dt.getUTCMonth() + 2, 1));
console.log('UTC日付マイナスUNIXTME', nextUNIX);

// nextMonthDayDate.setUTCDate(1);
// nextMonthDayDate.toISOString();

// const nextMonthDay = Date.parse(new Date(dt.getFullYear(), dt.getMonth() + 3,　dt.setDate(1), 0));

// const paymentExpireAt = Math.floor(nextMonthDayDate / 1000);

// console.log('調整 翌々月初日 ', nextMonthDayDate);
// console.log('調整翌々月初日(UNIXTIME): ', paymentExpireAt);

// result.setUTCDate(1);
// result.setUTCHours(0);
// result.setUTCMinutes(0);
// result.setUTCSeconds(0);
// result.setUTCMilliseconds(0);

// const result3 = result.toISOString();

// console.log(4, result3);
// console.log(result.toISOString());

// const result1 = Date.parse(result);
// console.log(4, Date.parse(result));
// const result2 = Math.floor(result1 / 1000);
// console.log(4, result2);


// console.log(new Date(dt.getFullYear(), dt.getMonth() + 3, 0 ));


// const rsult1 = new Date(dt.getFullYear(), dt.getMonth() + 2, 0);
// console.log(typeof rsult1);

// const now = new Date();
// console.log(now);
// now.setUTCMonth(now.getUTCMonth() + 2);
// now.setUTCDate(1);
// now.setUTCHours(0);
// now.setUTCMinutes(0);
// now.setUTCSeconds(0);
// now.setUTCMilliseconds(0)
// // const day = now.toISOString();
// console.log(1, now);

// console.log(typeof now);

// const date2 = Date.parse(now);
// const paymentExpireAt = Math.floor(date2 / 1000);

// console.log(paymentExpireAt);


// // console.log(2, new Date(dt.getFullYear(), dt.getMonth() + 3, 1));
// console.log();
// // 翌々月初日

// // 10/1 0:0:0
// // const paymentExpireAt = Math.floor(nextMonthDay / 1000);
// // console.log(3, paymentExpireAt);
