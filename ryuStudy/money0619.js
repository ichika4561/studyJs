const rate = 1.03;
const moneyPerYear = 100;

// const result =(((moneyPerYear*rate)+moneyPerYear)*rate)+moneyPerYear

let moneyYearEnd = 0;

for (let i = 0; i<1・0; i++){
    moneyYearEnd = (moneyYearEnd + moneyPerYear) *rate;
}

console.log(moneyYearEnd);

// if文なら、計算式を関数にする。引数に年数を入れる。条件に、10年になったらどうかを入れる。