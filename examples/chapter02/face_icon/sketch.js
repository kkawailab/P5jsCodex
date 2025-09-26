function setup() {
  createCanvas(400, 400); // 正方形キャンバス
}

function draw() {
  background(255); // 背景を白で塗り直す

  fill(255, 220, 180); // 肌色
  noStroke(); // 輪郭線を消す
  ellipse(width / 2, height / 2, 200, 200); // 顔の輪郭

  fill(255); // 左目の白目
  ellipse(width / 2 - 40, height / 2 - 20, 40, 25);
  fill(50); // 左目の黒目
  ellipse(width / 2 - 40, height / 2 - 20, 15, 15);

  fill(255);
  ellipse(width / 2 + 40, height / 2 - 20, 40, 25); // 右目の白目
  fill(50);
  ellipse(width / 2 + 40, height / 2 - 20, 15, 15); // 右目の黒目

  stroke(200, 50, 50); // 口の輪郭色
  strokeWeight(5); // 線を太めに
  noFill(); // 塗りつぶさない
  arc(width / 2, height / 2 + 40, 120, 80, 0, PI); // 半円で笑顔を描く
}
