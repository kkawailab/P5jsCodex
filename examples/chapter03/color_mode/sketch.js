function setup() {
  createCanvas(400, 400); // 正方形のキャンバス
  colorMode(HSL, 360, 100, 100, 1); // HSLモードを指定
  noStroke(); // 輪郭線を非表示
}

function draw() {
  background(0, 0, 95); // 薄いグレーの背景

  for (let i = 0; i < 10; i++) {
    const hue = i * 36; // 色相をずらす
    fill(hue, 80, 60, 0.8); // 彩度80、明度60、透明度0.8
    circle(200, 200, 40 + i * 10); // 同心円を描く
  }
}
