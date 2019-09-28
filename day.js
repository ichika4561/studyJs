// const dt = new Date('2019/09/01 00:34:56');
const dayjs = require('dayjs');

// // const dateTime = (unixTime) => {
// //     if (unixTime === null) {
// //       return null;
// //     }
// //     const unix = Math.floor(unixTime * 1000);
// //     const day = dayjs(unix).format('YYYY/MM/DD HH:mm');
// //     return day;
// //   };
// //   const nextMonthLastDay = () => dayjs(dt).add(1, 'month').endOf('month')
// //   .set('hour', 15)
// //   .set('minute', 0)
// //   .set('second', 0)
// //   .unix();

// // console.log(nextMonthLastDay());
// // console.log(dateTime(1572534000));   

// const result = dayjs().Substract(1, 'day').add(365, 'day').unix();
// console.log(result);


const start = dayjs().valueOf();
console.log(start);
