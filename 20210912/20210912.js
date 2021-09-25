let myAge = 43;

if (myAge > 40) {
  console.log('壮年');
}

if (myAge >= 40) {
  console.log('40歳以上');
} else {
  console.log('40歳未満');
}

if (myAge < 30) {
  console.log('30歳以上');
} else if(myAge > 50) {
  console.log('50歳未満');
} else if (myAge < 40) {
  console.log('40歳以上');
} else {
  console.log('40歳以上、50歳未満');
}


switch (myAge) {
  case 10:
    console.log('10歳です');
    break;
    case 100:
    console.log('100歳です');
    break;
    case 43:
      console.log('43歳です');
      break;
  default:
    console.log('10歳でも50歳でも100歳でもない');
    break;
}

let total = 0;
for (let i = 0; i <= 10; i++) {
  total = total + i;
}

console.log('合計は' + total);
document.getElementById('forbun').innerText = total;

let n = 1;
let max = 20
let output = '';

while (n <= max) {
  if (n % 2 == 0) {
    if (n != max) {
      output = output + n + ', ';
    } else {
      output = output + n ;
    }
  }
  n = n + 1;
};

console.log(output);
document.getElementById('guusuu').innerText = output;

for (let i = 0; i < 10 ; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}

let win = 0, loose = 0, draw = 0;

for (let i = 0; i < 10; i++) {

  // 0から1の乱数が入る
  let ransu = Math.random();
  if (ransu < 0.33) {
    win++;
  } else if (ransu < 0.66) {
    loose++;
  } else {
    draw++;
  }
  if (win >= 5) {
    console.log('降参です！');
    break;
  };
}

console.log(win + '勝' + loose + '敗' + draw + '引き分け');

let total2021 = 0;

let card = [1,2,3,'JOKER',4];

console.log('card.length' + card.length);

for (let i = 0; i < card.length; i++) {
  console.log(card[i]);
  // JOKER以外を数える
  // JOKERのときは、合計せず、次のカードを引く
  if (card[i] == 'JOKER') {
    continue;
  };
  total2021 += card[i];
  console.log('---' + total2021);
}

console.log(total2021);

console.log('----------');
// 20210926 体重の入力を忘れた日は省いて平均値を出す。

let weight = [97, 98, 99, '', 96, 97, 99, 98, '', 95, 98.8, 96, 98.9, '', 99];

console.log(weight);

console.log(weight[3]);

console.log(weight[3] == '');


let count = weight.length;
let weightgokei = 0;

for (let i = 0; i < weight.length; i++) {
  if (weight[i] == '') {
    weight[i] = 0;
    count = count - 1;
  }
  console.log(i);
  console.log(weight[i]);
  weightgokei += weight[i];
  console.log(weightgokei);

}

console.log(weightgokei);
console.log(count);
let heikin = weightgokei/count
console.log(heikin);