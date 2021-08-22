// 日〜土までの配列を準備
const weekListJa　= ['日','月','火','水','木','金','土']

// htmlのドロップダウンリストの要素を取得
const weekDropDownList = document.getElementById('weekDropDownList');
const button = document.getElementById('button');
const text = document.getElementById('text');


// for文を使って、曜日を土ロップダウンリストに入れる。
for(let i = 0; i <= 6; i++){
  // htmlのoptionを生成(この時点では、selectタグに追加されていない単独のoptionタグ)
  let option = document.createElement('option');

  // optionタグのvalueを追加
  option.setAttribute('value', i);

  // optionタグの表示するテキストの曜日を追加
  option.innerText = weekListJa[i];

  // 確認用：曜日をlogに出力
  // console.log(weekListJa[i]);

  // selectタグにoptionタグを追加
  weekDropDownList.appendChild(option);
};


// ボタンを押したら、曜日を取得し、それによって、仕事か休みか表示する。
button.onclick = function() {

  // ドロップダウンリストのvalue(何番目？)を取得
  let value = weekDropDownList.value;
  // console.log(value);

  // 何曜日かをドロップダウンリストのvalueから取得
  let dayOfWeekJa = weekListJa[value]
  // console.log(dayOfWeekJa);

  // 日曜日or土曜日だったら、休み。それ以外の曜日は仕事
  if (value == 0 || value == 6) {
    text.innerText = dayOfWeekJa + '曜日は休みです';
    // console.log(weekListJa[value] + '曜日は休みです');
  } else {
    text.innerText = dayOfWeekJa + '曜日は仕事です';
    // console.log(weekListJa[value] + '曜日は仕事です');
  };
};

// ドロップダウンリストを変更した場合に実行する場合はこっち。
// weekDropDownList.addEventListener('change', handleChange);

// function handleChange(event) {

// };
