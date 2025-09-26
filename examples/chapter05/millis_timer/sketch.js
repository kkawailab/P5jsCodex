function setup() {
  createCanvas(400, 400); // 正方形キャンバス
  textAlign(CENTER, CENTER); // テキストを中央揃え
  textSize(24); // テキストサイズ
}

function draw() {
  background(250); // 明るい背景

  const seconds = millis() / 1000; // 経過秒数
  fill(50, 100, 200); // 青系の文字色
  text(`${seconds.toFixed(2)} 秒経過`, width / 2, height / 2); // 小数点以下2桁で表示
}
