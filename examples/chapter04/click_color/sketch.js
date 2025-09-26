let currentColor; // 現在の背景色

function setup() {
  createCanvas(400, 400); // 正方形のキャンバス
  currentColor = color(50, 100, 200); // 初期の背景色
  textSize(24); // テキストサイズ
  textAlign(CENTER, CENTER); // 中央揃え
}

function draw() {
  background(currentColor); // 保存した色で背景を塗る

  fill(255);
  text('クリックで色が変わるよ', width / 2, height / 2); // メッセージを表示
}

function mousePressed() {
  const r = random(255);
  const g = random(255);
  const b = random(255);
  currentColor = color(r, g, b); // ランダムな色に変更
}
