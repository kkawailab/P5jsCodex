function setup() {
  createCanvas(400, 200); // 横長のキャンバス
  noLoop(); // 描画は1回で十分
}

function draw() {
  background(255); // 背景を白でリセット

  fill(255, 0, 0); // 赤色
  stroke(0); // 黒い輪郭
  rect(30, 30, 100, 100); // 左側の四角形

  fill(0, 255, 0, 180); // 半透明の緑
  stroke(0, 100, 0); // 線を濃い緑に
  ellipse(200, 80, 120, 120); // 中央の円

  strokeWeight(6); // 太線
  stroke(0, 0, 255); // 青
  line(260, 150, 360, 40); // 斜めの線
}
