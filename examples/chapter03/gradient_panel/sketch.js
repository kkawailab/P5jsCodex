function setup() {
  createCanvas(400, 300); // 横長のキャンバス
  noLoop(); // 描画は1回だけ
}

function draw() {
  for (let y = 0; y < height; y++) {
    const c = map(y, 0, height, 0, 255); // y座標を0〜255に変換
    stroke(0, c, 255 - c); // 青から赤へ変化する色
    line(0, y, width, y); // 横線を描く
  }

  noStroke();
  fill(255, 255, 255, 200); // 半透明の白
  rect(100, 80, 200, 140, 20); // 角丸のパネル
}
