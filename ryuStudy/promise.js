
resolve();
は完了したという意味。

ないと、そのあと、then();も動かない。

秒数制限かけてても、
then も同時に開始。


Promise.all(
    [1
2
    ]
).then()
then は追加処理。

1,2がresolve無ければ、1,2は動くが、thenは動かない。

