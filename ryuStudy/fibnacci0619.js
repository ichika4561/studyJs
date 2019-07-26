// 一番目　と　二番目を足す。
// 二番目　と　三番目を足す。
// 三番目　と　４番目を足す。

// before + after

// index は何番目の数字なのか。
const fibo = (index) =>{
  if (index ===1 ){
   return 1;
  }else if(index === 2){
    return 1;
  }else{
    return fibo(index - 1)+fibo(index - 2)
  }
}

// 後半の計算は実は不要。動的計画法
// リストを作ってそこに仮置きしておくべき。

console.log(fibo(4))


const list = new Arrat(10);
list.fill(1);

for(let i = 0; i < 10; i++){
  if(i <= 1){
    list[i] = 1;
  }else{
    list[i] = list[i-1] + list[i-2];
  }
}


