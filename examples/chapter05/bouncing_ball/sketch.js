let x = 0; // ボールのx座標
let speed = 2; // 移動速度

function setup() {
  createCanvas(500, 200); // 横長キャンバス
}

function draw() {
  background(20); // 暗い背景

  fill(0, 200, 255); // 水色
  noStroke();
  circle(x, height / 2, 60); // ボールを描く

  x += speed; // x座標を更新

  if (x > width || x < 0) {
    speed *= -1; // 端で反転
  }
}
