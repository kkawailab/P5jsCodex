let playerX = 200; // プレイヤーのx座標
let playerY = 200; // プレイヤーのy座標
let speed = 4; // 移動速度

function setup() {
  createCanvas(400, 400); // プレイフィールド
}

function draw() {
  background(220); // 背景をリセット

  fill(100, 150, 255); // プレイヤーの色
  rect(playerX, playerY, 40, 40); // プレイヤーを四角で描画
}

function keyPressed() {
  if (key === 'ArrowUp') {
    playerY -= speed; // 上移動
  } else if (key === 'ArrowDown') {
    playerY += speed; // 下移動
  } else if (key === 'ArrowLeft') {
    playerX -= speed; // 左移動
  } else if (key === 'ArrowRight') {
    playerX += speed; // 右移動
  } else if (key === ' ') {
    speed = speed === 4 ? 8 : 4; // スペースで速度を切り替える
  }
}
