function setup() {
  createCanvas(500, 300); // 幅500px、高さ300pxのキャンバス
}

function draw() {
  background(240); // 背景を薄いグレーで塗る

  stroke(0); // 線色を黒に設定
  line(50, 50, 200, 50); // 横方向の線を描く

  noFill(); // 図形内部を塗りつぶさない
  rect(50, 80, 120, 60); // 四角形を描画

  fill(0, 150, 200); // 水色の塗りつぶし
  ellipse(250, 150, 80, 80); // 円を描画

  strokeWeight(4); // 線を太くする
  stroke(200, 50, 100); // 線色をピンクに変更
  line(320, 200, 450, 250); // 斜めの線を描く
}
