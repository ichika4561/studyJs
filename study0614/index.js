// const request = require('request');

// const getXrpPrice = () =>{
// // node call rest api
//     request('https://public.bitbank.cc/btc_jpy/ticker', { json: true }, (err, res, body) => {
//     if (err) { return console.log(err); }
//     console.log(body.data.buy);
//     });
// }

// // 仮想通貨の値段を毎秒切り替える
// // nodejs do something every second
// // setIntervalはグローバル関数。requireも不必要。
// setInterval(getXrpPrice, 1000);

var str         = '123abcあいう',
    stringCount = str.length;

console.log(stringCount);