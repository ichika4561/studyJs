// Node.js 必要データを適時持ってくるため。

// DBとインターネット通信が時間がかかる
// 特に指定がなければファイル操作は非同期
// ドキュメントに同期、非同期かが書かれている。

// File読み込んで、データを取得して行くから、２番目にデータを出力する。

// ライブラリに引数を渡して、実行させる。

// promiseにしかできない動作。
// トランザクション処理はpromiseにしかできない。
// callbackもできるが、オススメしない。
// async/await にはできない。


// promise.all 初期化処理。
// .init　がpromise

await　は絶対に、 asyncの中

await も resolve が必要。

'fs'はcallbackのみ
・await使えないため、await使いたければ、自分でpromiseをかく？
・バージョン11以降で代替品を探す。


AWSは　NODE　10　までしか使っていない。


