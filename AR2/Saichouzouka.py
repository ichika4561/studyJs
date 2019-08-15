#  最長部分増加
#  [1:] １未満の要素。
# append = リストの要素の追加。

from bisect import bisect_left

def lis(A: list):
    L = [A[0]]
    for a in A[1:]:
        if a > L[-1]:
            # Lの末尾よりaが大きければ増加部分列を延長できる
            L.append(a)
        else:
            # そうでなければ、「aより小さい最大要素の次」をaにする
            # 該当位置は、二分探索で特定できる
            L[bisect_left(L, a)] = a
    return len(L)

# -----------------------------------------
print(lis([3, 4, 5, 1, 6, 3, 2, 7])) # => 5

s

