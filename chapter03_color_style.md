# 第3章 色とスタイルを操る

## この章で学ぶこと
- `fill()`と`stroke()`で色を変更する
- RGBとHSLなど色指定の方法
- グラデーション風の表現や透明度の使い方

## 色指定の基本
`fill()`は図形の塗りつぶし色、`stroke()`は輪郭線の色を設定します。どちらも`colorMode()`を使って指定方法を変えられます。

```javascript
function setup() {
  createCanvas(400, 200); // 横長のキャンバスを用意
  noLoop(); // draw()を1回だけ実行したら止める
}

function draw() {
  background(255); // 背景を白で初期化

  fill(255, 0, 0); // 赤色 (R=255, G=0, B=0)
  stroke(0); // 黒い輪郭線
  rect(30, 30, 100, 100); // 左に赤い四角形

  fill(0, 255, 0, 180); // 透明度180の緑色
  stroke(0, 100, 0); // 少し暗い緑の輪郭
  ellipse(200, 80, 120, 120); // 中央に半透明の円

  strokeWeight(6); // 太い線
  stroke(0, 0, 255); // 青い線
  line(260, 150, 360, 40); // 右上に向かう太線
}
```

## `colorMode()`でHSL指定を使う
```javascript
function setup() {
  createCanvas(400, 400); // 正方形キャンバス
  colorMode(HSL, 360, 100, 100, 1); // 色相・彩度・明度・透明度を設定範囲ごとに指定
  noStroke(); // 輪郭線を表示しない
}

function draw() {
  background(0, 0, 95); // 明るい背景色（H=0, S=0, L=95）

  for (let i = 0; i < 10; i++) {
    let hue = i * 36; // 色相を少しずつずらす
    fill(hue, 80, 60, 0.8); // 彩度80、明度60、透明度80%
    circle(200, 200, 40 + i * 10); // 徐々に大きくなる円を重ねる
  }
}
```

## グラデーション風の背景
```javascript
function setup() {
  createCanvas(400, 300); // 横長のキャンバス
  noLoop(); // 一度だけ描画
}

function draw() {
  for (let y = 0; y < height; y++) {
    let c = map(y, 0, height, 0, 255); // y座標を0〜255の範囲に変換
    stroke(0, c, 255 - c); // 上が青、下が赤になるように色を計算
    line(0, y, width, y); // 横線を描き、徐々に色を変化させる
  }

  noStroke(); // 輪郭線を消す
  fill(255, 255, 255, 200); // 半透明の白を設定
  rect(100, 80, 200, 140, 20); // 角丸四角を重ねてパネルのように見せる
}
```

## 追加サンプル：カラーパレットと影の表現
```javascript
let palette = []; // 色をまとめて管理する配列

function setup() {
  createCanvas(420, 240); // パレットを並べる横長キャンバス
  colorMode(HSB, 360, 100, 100); // HSBモードで色を扱いやすくする

  for (let i = 0; i < 6; i++) {
    const hue = i * 60; // 色相を60度ずつずらして虹のようにする
    palette.push(color(hue, 80, 90)); // 彩度80、明度90で柔らかい色を追加
  }

  noLoop(); // 描画は1回だけで十分
}

function draw() {
  background(0, 0, 15); // 背景を暗くして色を際立たせる

  for (let i = 0; i < palette.length; i++) {
    const x = 40 + i * 60; // パレットのx座標を計算

    // 影の部分
    noStroke(); // 影の輪郭線を消す
    fill(0, 0, 0, 0.4); // 透明度40%の黒
    ellipse(x + 4, height / 2 + 24, 70, 20); // 少し右下にずらした楕円の影

    // チップ本体
    fill(palette[i]); // 事前に作った配列から色を取り出す
    stroke(0, 0, 100); // 白い縁で浮き上がらせる
    strokeWeight(3); // 輪郭をやや太めに
    rectMode(CENTER); // 中心基準で四角形を描く
    rect(x, height / 2, 50, 70, 12); // 丸みのある色見本チップ

    // ラベル
    fill(0, 0, 100); // 明るい文字色
    noStroke(); // テキストには輪郭線不要
    textAlign(CENTER, CENTER); // 文字を中央揃え
    textSize(12); // コンパクトな文字サイズ
    text(`Hue ${i * 60}`, x, height / 2 + 48); // 色相値をラベルとして表示
  }
}
```

## 練習問題
1. `colorMode(HSB, 360, 100, 100)`を使って、虹色の丸を横一列に描いてみましょう。
2. `strokeWeight()`を使って線の太さが徐々に変わるグラフを作ってみましょう。
3. 透明度(`alpha`)を活用して重なりの表現を試してみましょう。

## 解答例
1. `for`ループで`fill(i * 36, 100, 100); ellipse(40 + i * 40, height / 2, 30, 30);`のように描画すると虹色の丸が並びます。
2. `strokeWeight(1 + i); line(50 + i * 20, 250, 50 + i * 20, 100);`などと書くと段階的に太さが変わります。
3. `fill(0, 0, 255, 100); ellipse(150, 150, 120, 120);`のように透明度を指定し、重なり部分が混ざる様子を観察します。
