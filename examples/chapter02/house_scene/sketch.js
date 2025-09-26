function setup() {
  createCanvas(500, 350); // 横長のキャンバス
}

function draw() {
  background(135, 206, 235); // 空の色

  noStroke();
  fill(100, 200, 120); // 草の色
  rect(0, height * 0.65, width, height * 0.35); // 地面

  fill(230, 180, 140); // 家の土台
  rectMode(CENTER);
  rect(width / 2, height * 0.6, 200, 150);

  fill(180, 60, 50); // 屋根
  triangle(width / 2 - 120, height * 0.52, width / 2, height * 0.35, width / 2 + 120, height * 0.52);

  rectMode(CORNER);
  stroke(255); // 窓の枠
  strokeWeight(4);
  fill(180, 220, 255); // ガラス
  rect(width / 2 - 80, height * 0.55, 60, 60);
  rect(width / 2 + 20, height * 0.55, 60, 60);

  stroke(90, 60, 40); // ドア枠
  strokeWeight(6);
  fill(205, 170, 125); // ドア
  rect(width / 2 - 25, height * 0.63, 50, 100);

  noStroke();
  fill(255, 215, 0); // ドアノブ
  ellipse(width / 2 + 15, height * 0.63 + 50, 12, 12);
}
