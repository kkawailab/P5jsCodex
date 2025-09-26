let stars = []; // 星の情報を保存する配列
let noiseOffset = 0; // ノイズ関数の時間的オフセット

function setup() {
  createCanvas(500, 500); // 星空を描くキャンバス

  for (let i = 0; i < 80; i++) {
    stars.push({
      x: random(width), // 星のx座標
      y: random(height), // 星のy座標
      size: random(2, 6), // 星の大きさ
      speed: random(0.002, 0.01) // ノイズを進める速度
    });
  }
}

function draw() {
  background(10, 10, 30); // 夜空の色

  noStroke();
  fill(255);

  for (const star of stars) {
    const n = noise(noiseOffset * star.speed, star.x * 0.01); // ノイズ値を取得
    const twinkle = map(n, 0, 1, 0.3, 1); // 0.3〜1.0へマッピング
    const glow = twinkle * 255; // 明るさを0〜255へ変換

    fill(glow, glow, 255); // 青白い光
    const yOffset = sin(frameCount * 0.01 + star.x * 0.05) * 5; // ゆらゆら上下に揺れるオフセット
    circle(star.x, star.y + yOffset, star.size * twinkle); // 星を描画
  }

  noiseOffset += 0.01; // 時間を進める

  stroke(255, 240, 200); // 流れ星の色
  strokeWeight(3);
  const streakX = (frameCount * 3) % (width + 200) - 100; // 右から左へ動く位置
  line(streakX, height * 0.2, streakX - 80, height * 0.2 + 20); // 流れ星を描画
}
