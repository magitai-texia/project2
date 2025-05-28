/**
 * 正の整数 N の階乗を計算する再帰関数
 * @param n - 階乗を計算する対象の正の整数 (0 以上の整数を想定)
 * @returns n の階乗の結果 (n!)。負の数が入力された場合は NaN。
 */
const factorial = (n: number): number => {
  // ベースケース: n が 0 または 1 の場合、1 を返す (0! = 1, 1! = 1)
  if (n === 0 || n === 1) {
    return 1;
  }

  // この関数は0以上の整数を前提とします。
  // 負の数が入力された場合、NaN を返します。
  if (n < 0) {
    return NaN;
  }

  // 再帰ステップ: n * (n-1)! を計算する
  return n * factorial(n - 1);
};

// --- 以下、動作確認用 ---

console.log("--- 階乗計算 結果 ---");
const testValue1 = 4;
console.log(`${testValue1}! = ${factorial(testValue1)}`); // 例: 4! = 24

const testValue2 = 5;
console.log(`${testValue2}! = ${factorial(testValue2)}`); // 例: 5! = 120

const testValue3 = 0;
console.log(`${testValue3}! = ${factorial(testValue3)}`); // 例: 0! = 1

const testValueNegative = -3;
const resultNegative = factorial(testValueNegative);
if (isNaN(resultNegative)) {
  console.log(`${testValueNegative}! = 計算できません (不正な入力)`);
} else {
  console.log(`${testValueNegative}! = ${resultNegative}`);
}


