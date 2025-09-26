let drawing = []; // 描いた線分を保存する配列
let isEraser = false; // 消しゴムモードのフラグ

function setup() {
  createCanvas(600, 400); // スケッチブックサイズのキャンバス
  background(255); // 真っ白な紙にする
}

function draw() {
  background(255); // 背景を塗り直して線分を再描画

  for (const segment of drawing) {
    stroke(segment.isEraser ? 255 : segment.color);
    strokeWeight(segment.weight);
    line(segment.x1, segment.y1, segment.x2, segment.y2);
  }

  noStroke();
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(isEraser ? 'モード: 消しゴム (Eで切替)' : 'モード: ペン (Eで切替)', 10, 10);
}

function mouseDragged() {
  const segment = {
    x1: pmouseX,
    y1: pmouseY,
    x2: mouseX,
    y2: mouseY,
    weight: isEraser ? 30 : 4,
    color: color(30, 30, 30),
    isEraser: isEraser
  };
  drawing.push(segment);
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    isEraser = !isEraser; // Eキーで消しゴム切り替え
  }
  if (key === 'c' || key === 'C') {
    drawing = []; // Cキーでキャンバスをクリア
  }
}
