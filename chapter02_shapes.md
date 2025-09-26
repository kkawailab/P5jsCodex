# 第2章 形を描く基本

## この章で学ぶこと
- 座標と図形の描画方法
- `rect()`, `ellipse()`, `line()`などの基本的な図形関数
- 図形を複数組み合わせて簡単なイラストを作成する

## 座標の考え方
p5.jsの座標は左上が原点(0, 0)で、右方向がx、下方向がyです。単位はピクセルで、`width`と`height`はキャンバスの幅と高さを表します。

## 基本図形を描いてみよう
```javascript
function setup() {
  createCanvas(500, 300); // 幅500px、高さ300pxのキャンバス
}

function draw() {
  background(240); // 毎フレーム背景を薄いグレーで塗る

  stroke(0); // 線色を黒に設定
  line(50, 50, 200, 50); // (50,50)から(200,50)へ横線を引く

  noFill(); // 図形内部を塗りつぶさない設定
  rect(50, 80, 120, 60); // 左上(50,80)に幅120、高さ60の四角形

  fill(0, 150, 200); // 水色で塗りつぶす設定
  ellipse(250, 150, 80, 80); // 中心(250,150)に直径80の円

  strokeWeight(4); // 線の太さを4ピクセルに変更
  stroke(200, 50, 100); // 線色を明るいピンクに設定
  line(320, 200, 450, 250); // 斜め線を描く
}
```

## 形を組み合わせてアイコンを作る
```javascript
function setup() {
  createCanvas(400, 400); // 正方形のキャンバスを用意
}

function draw() {
  background(255); // 背景を白にリセット

  // 顔の輪郭を描く
  fill(255, 220, 180); // 肌色の塗り
  noStroke(); // 輪郭線を表示しない
  ellipse(width / 2, height / 2, 200, 200); // 中央に直径200pxの円

  // 左目
  fill(255); // 目の白目部分
  ellipse(width / 2 - 40, height / 2 - 20, 40, 25); // 左目の白目
  fill(50); // 黒目
  ellipse(width / 2 - 40, height / 2 - 20, 15, 15); // 左目の黒目

  // 右目
  fill(255);
  ellipse(width / 2 + 40, height / 2 - 20, 40, 25);
  fill(50);
  ellipse(width / 2 + 40, height / 2 - 20, 15, 15);

  // 口
  stroke(200, 50, 50); // 線を赤っぽく設定
  strokeWeight(5); // 線を太くして口らしくする
  noFill(); // 中を塗りつぶさない
  arc(width / 2, height / 2 + 40, 120, 80, 0, PI); // 半円弧で笑顔を描く
}
```

## 追加サンプル：図形を組み合わせて家を描く
```javascript
function setup() {
  createCanvas(500, 350); // 横長のキャンバスで風景を作る
}

function draw() {
  background(135, 206, 235); // 空色で背景を塗る

  // 地面
  noStroke(); // 地面は輪郭線を消す
  fill(100, 200, 120); // 草の色
  rect(0, height * 0.65, width, height * 0.35); // 画面下部を緑で塗りつぶす

  // 家の土台
  fill(230, 180, 140); // 木材っぽい色
  rectMode(CENTER); // 家の中心を基準に描く
  rect(width / 2, height * 0.6, 200, 150); // 土台となる四角形

  // 屋根
  fill(180, 60, 50); // 赤い屋根
  triangle(width / 2 - 120, height * 0.52, width / 2, height * 0.35, width / 2 + 120, height * 0.52); // 三角形の屋根

  // 窓
  rectMode(CORNER); // 窓は左上基準に戻す
  stroke(255); // 窓の枠を白色にする
  strokeWeight(4); // 枠線を太くする
  fill(180, 220, 255); // ガラスの青色
  rect(width / 2 - 80, height * 0.55, 60, 60); // 左窓
  rect(width / 2 + 20, height * 0.55, 60, 60); // 右窓

  // ドア
  stroke(90, 60, 40); // ドア枠の濃い茶色
  strokeWeight(6); // 枠線を太くして存在感を出す
  fill(205, 170, 125); // ドア本体の色
  rect(width / 2 - 25, height * 0.63, 50, 100); // 中央のドア

  // ドアノブ
  noStroke(); // ドアノブは小さいので輪郭不要
  fill(255, 215, 0); // 金色っぽい色
  ellipse(width / 2 + 15, height * 0.63 + 50, 12, 12); // ドアノブを描画
}
```

## 図形描画のコツ
- `noStroke()`や`noFill()`を使うと線なし・塗りなしの図形が描けます。
- `strokeWeight()`で線の太さを調整できます。
- `rectMode()`や`ellipseMode()`を使うと基準点を変更できます。

## 練習問題
1. `line()`を使って三角形の輪郭を描いてみましょう。
2. `rectMode(CENTER)`を使って、中央を基準に四角形を描いてみましょう。
3. 複数の円を並べて雪だるまを描いてみましょう。

## 解答例
1. `line(100, 200, 200, 50); line(200, 50, 300, 200); line(300, 200, 100, 200);`のように3本の線を組み合わせて三角形を作ります。
2. `rectMode(CENTER); rect(width / 2, height / 2, 100, 50);`と書くと、中心基準の四角形が描けます。
3. `ellipse()`を縦に3つ並べ、サイズを変えながら雪だるまの胴体を表現し、追加で小さな円で目を描きます。
