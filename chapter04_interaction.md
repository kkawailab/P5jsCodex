# 第4章 マウスとキーボードでインタラクション

## この章で学ぶこと
- マウス座標の取得と活用
- クリック・ドラッグ・ホバーなどのイベント
- キーボード入力で動きを変化させる方法

## マウス位置を使って図形を動かす
```javascript
function setup() {
  createCanvas(500, 400); // マウス操作の様子が分かる広さのキャンバス
  noCursor(); // 標準のマウスカーソルを隠す
}

function draw() {
  background(30); // 黒に近い背景色

  fill(200, 150, 0); // 明るいオレンジ色
  noStroke(); // 輪郭線なし
  circle(mouseX, mouseY, 40); // マウス位置に追従する円

  fill(255); // 白色
  textSize(16); // 文字サイズ
  text(`x: ${mouseX}, y: ${mouseY}`, 20, height - 20); // 現在の座標を左下に表示
}
```

## クリックで色を変える
```javascript
let currentColor; // 現在の背景色を保持する変数

function setup() {
  createCanvas(400, 400); // 正方形キャンバス
  currentColor = color(50, 100, 200); // 初期色を青系に設定
}

function draw() {
  background(currentColor); // 保存している色で背景を塗る

  fill(255); // 白いテキスト
  textAlign(CENTER, CENTER); // テキストを中央揃えにする
  textSize(24); // テキストサイズ
  text('クリックで色が変わるよ', width / 2, height / 2); // メッセージを表示
}

function mousePressed() {
  const r = random(255); // 0〜255のランダムな赤
  const g = random(255); // 0〜255のランダムな緑
  const b = random(255); // 0〜255のランダムな青
  currentColor = color(r, g, b); // ランダムに生成した色を背景色に設定
}
```

## キーボードでキャラクターを動かす
```javascript
let playerX = 200; // プレイヤーの初期x座標
let playerY = 200; // プレイヤーの初期y座標
let speed = 4; // 移動スピード

function setup() {
  createCanvas(400, 400); // プレイフィールド
}

function draw() {
  background(220); // 背景を塗りなおす

  fill(100, 150, 255); // プレイヤーの色
  rect(playerX, playerY, 40, 40); // プレイヤーを四角形で描画
}

function keyPressed() {
  if (key === 'ArrowUp') { // 上矢印キーが押されたら
    playerY -= speed; // y座標を減らして上に移動
  } else if (key === 'ArrowDown') {
    playerY += speed; // 下方向に移動
  } else if (key === 'ArrowLeft') {
    playerX -= speed; // 左方向に移動
  } else if (key === 'ArrowRight') {
    playerX += speed; // 右方向に移動
  } else if (key === ' ') { // スペースキーを押したら
    speed = speed === 4 ? 8 : 4; // スピードを切り替える
  }
}
```

## 追加サンプル：マウスドラッグでお絵描きする
```javascript
let drawing = []; // 描いた線分を保存する配列
let isEraser = false; // 消しゴムモードかどうか

function setup() {
  createCanvas(600, 400); // スケッチブックを意識した広いキャンバス
  background(255); // 真っ白な紙の状態に初期化
}

function draw() {
  background(255); // 毎フレーム背景を塗り直して最新の線を再描画

  for (const segment of drawing) {
    stroke(segment.isEraser ? 255 : segment.color); // 消しゴムの場合は白で上書き
    strokeWeight(segment.weight); // 描画時に保存した線の太さを再現
    line(segment.x1, segment.y1, segment.x2, segment.y2); // 線分を描く
  }

  // UIとして現在のモードを左上に表示
  noStroke();
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  text(isEraser ? 'モード: 消しゴム (Eで切替)' : 'モード: ペン (Eで切替)', 10, 10);
}

function mouseDragged() {
  const segment = {
    x1: pmouseX, // 直前のマウス位置
    y1: pmouseY,
    x2: mouseX, // 現在のマウス位置
    y2: mouseY,
    weight: isEraser ? 30 : 4, // 消しゴムは太め、ペンは細めに設定
    color: color(30, 30, 30), // ペンの色
    isEraser: isEraser // モードを保存して後で再利用
  };
  drawing.push(segment); // 描いた線分を配列に追加
}

function keyPressed() {
  if (key === 'e' || key === 'E') {
    isEraser = !isEraser; // Eキーでモードを切り替える
  }
  if (key === 'c' || key === 'C') {
    drawing = []; // Cキーで全消去
  }
}
```

## 練習問題
1. マウスクリックした場所に円を追加して、花火のように残る仕組みを作ってみましょう。
2. キーボードの`A`キーで背景を暗くし、`S`キーで明るくする機能を加えてみましょう。
3. マウスドラッグ中だけ線が描ける「お絵描きモード」を実装してみましょう。

## 解答例
1. `mousePressed()`で座標を配列に保存し、`draw()`で配列内の位置に`ellipse()`を繰り返し描画します。
2. `keyPressed()`で`if (key === 'a' || key === 'A') backgroundColor -= 20;`などとし、`constrain()`で範囲を制限します。
3. `mouseDragged()`内で`line(pmouseX, pmouseY, mouseX, mouseY);`を呼び出すと、ドラッグしている間だけ線が描けます。
