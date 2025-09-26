function setup() {
  createCanvas(500, 400); // 広めのキャンバス
  noCursor(); // マウスカーソルを非表示にする
}

function draw() {
  background(30); // 暗い背景

  fill(200, 150, 0); // マウスを追う円の色
  noStroke();
  circle(mouseX, mouseY, 40); // マウス座標に追従する

  fill(255);
  textSize(16);
  text(`x: ${mouseX}, y: ${mouseY}`, 20, height - 20); // 座標を表示
}
