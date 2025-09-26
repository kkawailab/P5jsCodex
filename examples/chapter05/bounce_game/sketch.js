let ballX = 200; // ボールのx座標
let ballY = 200; // ボールのy座標
let ballVX = 3; // x方向の速度
let ballVY = 4; // y方向の速度
let score = 0; // スコア

function setup() {
  createCanvas(500, 400); // プレイフィールド
  textSize(20); // スコア表示用の文字サイズ
}

function draw() {
  background(30); // 背景を暗くする

  ballX += ballVX; // x座標を更新
  ballY += ballVY; // y座標を更新

  if (ballX < 20 || ballX > width - 20) {
    ballVX *= -1; // 左右で反射
    score += 1; // スコア加算
  }
  if (ballY < 20 || ballY > height - 20) {
    ballVY *= -1; // 上下で反射
    score += 1;
  }

  fill(200); // パドル
  rectMode(CENTER);
  rect(mouseX, height - 30, 80, 15, 10); // マウスに追従

  if (ballY > height - 50 && abs(ballX - mouseX) < 50 && ballVY > 0) {
    ballVY *= -1; // パドルで反射
    ballVY *= 1.05; // 少しスピードアップ
    score += 5; // ボーナス
  }

  fill(0, 200, 255); // ボール
  noStroke();
  circle(ballX, ballY, 40);

  fill(255); // スコア表示
  textAlign(LEFT, TOP);
  text(`Score: ${score}`, 20, 20);
}
