let palette = []; // 色の配列

function setup() {
  createCanvas(420, 240); // 横長キャンバス
  colorMode(HSB, 360, 100, 100); // HSBモードに切り替える

  for (let i = 0; i < 6; i++) {
    const hue = i * 60; // 色相を60度ずつずらす
    palette.push(color(hue, 80, 90)); // 彩度80、明度90で柔らかい色を保存
  }

  noLoop();
}

function draw() {
  background(0, 0, 15); // 暗い背景

  for (let i = 0; i < palette.length; i++) {
    const x = 40 + i * 60; // チップの位置

    noStroke();
    fill(0, 0, 0, 0.4); // 半透明の影
    ellipse(x + 4, height / 2 + 24, 70, 20); // 影を描く

    fill(palette[i]);
    stroke(0, 0, 100); // 白い縁
    strokeWeight(3);
    rectMode(CENTER);
    rect(x, height / 2, 50, 70, 12); // 色のチップ

    fill(0, 0, 100); // ラベル用の明るい文字色
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(12);
    text(`Hue ${i * 60}`, x, height / 2 + 48); // 色相を表示
  }
}
