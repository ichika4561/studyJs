// JSはコンパイラがクロームやnodeなど、変わってしまう。

// 実行の順番は小さい数字から
const list =[1, 2, 3,4];

for(let i = 0; i < list.length; i++){
  result.push(list[i] * 2);
//   result[i] = result[i] *2
}
console.log(result);

// 実行の順番はコンパイラの仕様による
const list =[1, 2, 3, 4];

list.forEach((value) =>{
    result.push(value *2);
  )}

console.log(result);

// FPのやり方
// メリットはわかりやすいことがある。
// １ 元は変えない
// ２ 値の動きに関与せず、動きだけ変える。
// リスト自体は変更しない。
// 実行の順番はコンパイラの仕様による
// フィボナッチのように順番に依存するものは、向いていない。
const list =[1, 2, 3,4];

const result = list.map(value => value * 2)
// 3! =1*2*3 は下記のコードの内容になる。
const bikuri = list.reduce((a, b) => a + b);
const odd = list.filter(value => value % 2 === 1);

console.log(result);
console.log(bikuri);
console.log(odd);

