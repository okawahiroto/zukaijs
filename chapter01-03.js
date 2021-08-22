const price = 150;
let input = 200;
console.log(input - price);

let answer = false;
if (answer) {
  console.log("正解です");
} else {
  console.log("間違いです");
};

console.log(10 + 11);
console.log(10 - 11);
console.log(10 * 11);
console.log(10 / 2);
console.log(10 % 7);


// インクリメントとデクリメント
let count = 1;
count++;
console.log(count);

let count_2 = 1;
count_2 = count_2 + 1;
console.log(count_2);

let count_d = 1;
count_d--;
console.log(count_d);

// 論理積(AND)
// 2つの条件が同時に成立する
// &&
let apple_zaiko = true;
let orange_zaiko = true;
console.log('論理和・AND・&&');
console.log(apple_zaiko && orange_zaiko);

// 論理和(OR)
// 2つの条件のうち、1つ以上が成立する
// ||
apple_zaiko = false;
orange_zaiko = true;
console.log('論理和・or・||');
console.log(apple_zaiko || orange_zaiko);

// 代入演算子
let input02 = 100;
input02 = input02 + 100
console.log(input02);

let input03 = 200;
input03 += 100
console.log(input03);

// 比較演算子
let numberA = 100;
let numberB = 100;
if (numberA == numberB) {
  console.log('2つの数字は等しいです！');
} else {
  console.log('2つの数字は等しくありません！');
};

let numberC = 100;
let numberD = 200;
if (numberC != numberD) {
  console.log('2つの数字は等しくありません！');
} else {
  console.log('2つの数字は等しいです！');
};

// 配列
let id = [001,002,003];
let meibo = ['山田','田中','鈴木'];
console.log(id[0]);

let StudentName = meibo[1];
console.log(StudentName);

console.log('名簿の3番目は' + meibo[2]);
meibo[2] = "佐藤";
console.log('名簿の3番目は' + meibo[2] + 'に書き換えました');

meibo = ['太郎', '次郎','三郎']
console.log(meibo);

console.log('名簿の1番目を取り出して、別の名前を入れる。');
let name01 = meibo[0];
name01 = "四郎";

console.log('取り出して書き換えた名前は、' + name01);
console.log('名簿の1番目は、' + meibo[0]);

// 連想配列
console.log('◆連想配列');
meibo = {
  2001:'山田',
  2002:'田中',
  2003:'中村',
}

console.log(meibo);

console.log(meibo['2001']);
console.log(meibo[2003]);

meibo = [
  {id:'1111', name:'山田'},
  {id:'2222', name:'田中'},
  {id:'3333', name:'中村'}
]

console.log(meibo[0]['id'] + ':' + meibo[0]['name']);



let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let day = time.getDate();




document.getElementById('button').onclick = function() {
  console.log(time);
  document.getElementById('text').textContent = 'ボタンが押されたのは、' + time + 'です。';
};