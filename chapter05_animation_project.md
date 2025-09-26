# 第5章 アニメーションとミニプロジェクト

## この章で学ぶこと
- `frameRate()`と時間を利用した動きの制御
- アニメーションを滑らかにするテクニック
- 学んだ要素を組み合わせたミニプロジェクト

## スムーズなアニメーションの基本
```javascript
let x = 0; // 円のx座標を管理する変数
let speed = 2; // 移動速度

function setup() {
  createCanvas(500, 200); // 横長のキャンバス
}

function draw() {
  background(20); // 背景を黒に近い色で塗る

  fill(0, 200, 255); // 水色の円を設定
  noStroke(); // 輪郭線を消す
  circle(x, height / 2, 60); // 現在のx座標に円を描画

  x += speed; // x座標をスピード分だけ進める

  if (x > width || x < 0) {
    speed *= -1; // 端に到達したら方向を反転する
  }
}
```

## `millis()`で時間を使う
```javascript
function setup() {
  createCanvas(400, 400); // 正方形キャンバス
  textAlign(CENTER, CENTER); // テキストを中央揃えにする
  textSize(24); // フォントサイズを設定
}

function draw() {
  background(250); // 明るい背景

  const seconds = millis() / 1000; // プログラム開始からの経過秒数
  fill(50, 100, 200); // 青系の塗り
  text(`${seconds.toFixed(2)} 秒経過`, width / 2, height / 2); // 小数点以下2桁で表示
}
```

## ミニプロジェクト：バウンスするボールとスコア
```javascript
let ballX = 200; // ボールのx座標
let ballY = 200; // ボールのy座標
let ballVX = 3; // x方向の速度
let ballVY = 4; // y方向の速度
let score = 0; // スコアを記録する変数

function setup() {
  createCanvas(500, 400); // プレイフィールド
  textSize(20); // スコア表示用の文字サイズ
}

function draw() {
  background(30); // 背景を暗い色にしてボールを目立たせる

  // ボールの位置を更新
  ballX += ballVX; // x座標に水平速度を加える
  ballY += ballVY; // y座標に垂直速度を加える

  // 壁で跳ね返る処理
  if (ballX < 20 || ballX > width - 20) {
    ballVX *= -1; // x方向の速度を反転
    score += 1; // 壁に当たるたびにスコアを加算
  }
  if (ballY < 20 || ballY > height - 20) {
    ballVY *= -1; // y方向の速度を反転
    score += 1; // 上下の壁に当たってもスコアを加算
  }

  // マウスポインタに反応するパドル
  fill(200); // パドルの色
  rectMode(CENTER); // 四角形の中心を基準に描画
  rect(mouseX, height - 30, 80, 15, 10); // 下部に追従するパドル

  // パドルとの衝突判定
  if (ballY > height - 50 && abs(ballX - mouseX) < 50 && ballVY > 0) {
    ballVY *= -1; // ボールを跳ね返す
    ballVY *= 1.05; // 少しずつスピードアップ
    score += 5; // 操作で成功した分を追加
  }

  // ボールの描画
  fill(0, 200, 255); // ボールの色
  noStroke(); // 輪郭線を消す
  circle(ballX, ballY, 40); // ボールのサイズ

  // スコアの表示
  fill(255); // スコア表記を白に
  textAlign(LEFT, TOP); // 左上に配置
  text(`Score: ${score}`, 20, 20); // スコアを描画
}
```

## 追加サンプル：ノイズで動く星空のパレード
```javascript
let stars = []; // 星の位置と動きを保持する配列
let noiseOffset = 0; // ノイズ関数の時間に相当する値

function setup() {
  createCanvas(500, 500); // 星空を表示する正方形キャンバス
  for (let i = 0; i < 80; i++) {
    stars.push({
      x: random(width), // ランダムなx座標
      y: random(height), // ランダムなy座標
      size: random(2, 6), // 星の大きさ
      speed: random(0.002, 0.01) // ノイズに使う速度
    });
  }
}

function draw() {
  background(10, 10, 30); // 夜空のような濃い青

  noStroke();
  fill(255);

  for (const star of stars) {
    const n = noise(noiseOffset * star.speed, star.x * 0.01); // 時間と位置でノイズを生成
    const twinkle = map(n, 0, 1, 0.3, 1); // ノイズを0.3〜1.0の明るさに変換

    const glow = twinkle * 255; // 明るさを0〜255の範囲に変換
    fill(glow, glow, 255); // 青白い光を設定
    circle(star.x, star.y + sin(frameCount * 0.01 + star.x * 0.05) * 5, star.size * twinkle); // ふわふわ上下する星
  }

  noiseOffset += 0.01; // ノイズの時間を進める

  // 流れ星を描画
  const streakX = (frameCount * 3) % (width + 200) - 100; // 線のx位置（画面外から出入り）
  stroke(255, 240, 200);
  strokeWeight(3);
  line(streakX, height * 0.2, streakX - 80, height * 0.2 + 20); // 斜めに伸びる光跡
}
```

## ミニプロジェクトの拡張アイデア
- ポーズ機能を作り、`keyPressed()`でON/OFFできるようにする。
- ボールが落下したらゲームオーバーにし、`score`をリセットする。
- パドルの位置をキーボードでも操作できるようにする。

## 練習問題
1. 最初のサンプルを改造して、`frameRate(30);`を設定したときの動きを観察し、違いを説明してみましょう。
2. `millis()`を使って10秒ごとに背景色を変える処理を追加してみましょう。
3. ミニプロジェクトに「3回ミスしたらゲームオーバー」というルールを追加しましょう。

## 解答例
1. `frameRate(30);`を`setup()`で呼び出すと1秒あたりの描画回数が半分になり、円の動きがゆっくりになります。
2. `if (floor(millis() / 10000) % 2 === 0) { background(20, 20, 80); } else { background(80, 20, 20); }`などと条件分岐で色を切り替えます。
3. ボールが画面下に抜けたときにカウントし、`if (lives <= 0) { noLoop(); }`のようにしてゲームを停止します。
