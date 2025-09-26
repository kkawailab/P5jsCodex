let sizeSlider; // 円の直径を制御するスライダー要素

function setup() {
  createCanvas(480, 320); // 取り回しやすいサイズのキャンバス
  sizeSlider = createSlider(10, 200, 80); // 最小10、最大200、初期値80のスライダーを生成
  sizeSlider.position(20, 20); // スライダーをキャンバス左上に配置
  sizeSlider.style('width', '150px'); // スライダーの見た目を調整
}

function draw() {
  background(240); // 背景を明るいグレーで塗り直す

  const circleSize = sizeSlider.value(); // スライダーの値を取得
  fill(100, 180, 255); // 円をソフトな青色で塗る
  noStroke(); // 輪郭線を非表示にする
  circle(width / 2, height / 2, circleSize); // 中央に円を描画

  fill(50); // 情報表示用の文字色
  textSize(16); // テキストサイズ
  textAlign(LEFT, CENTER); // 左揃え・垂直中央揃え
  text(`直径: ${circleSize}px`, 20, height - 30); // 現在の直径を表示
}
