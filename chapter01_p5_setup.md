# 第1章 p5.jsとJavaScriptの基本

## この章で学ぶこと
- p5.jsの役割とJavaScriptとの関係
- ブラウザ上でp5.jsスケッチを実行する方法
- `setup()`と`draw()`の基本構造
- エディタとファイルの準備手順

## p5.jsとは
p5.jsはProcessingから生まれたJavaScriptライブラリで、絵を描いたりアニメーションを作成したりすることを簡単にします。HTMLとJavaScriptが動く環境で動作するため、Webブラウザがあれば学習を始められます。

## 開発環境を整える
p5.js公式サイトにあるオンラインエディタや、ローカル環境でHTMLファイルとJavaScriptファイルを用意する方法があります。ここではローカル環境での最小構成を紹介します。

```
project/
├─ index.html
└─ sketch.js
```

### `index.html`の例
```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>My First p5.js Sketch</title>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
    <script src="sketch.js"></script>
  </head>
  <body>
  </body>
</html>
```

### `sketch.js`の基本構造
```javascript
// setup()はスケッチの最初に一度だけ呼び出される関数
function setup() {
  createCanvas(400, 400); // 幅400px、高さ400pxのキャンバスを作成する
}

// draw()は1秒間に60回（初期設定）繰り返し実行される関数
function draw() {
  background(220); // 毎フレーム、薄いグレーで背景を塗りつぶす
  circle(200, 200, 50); // 画面中央に直径50pxの円を描く
}
```

## もう一つのサンプル：テキストの表示
```javascript
// ウィンドウの大きさに合わせたキャンバスを作成する
function setup() {
  createCanvas(windowWidth, windowHeight); // ブラウザの幅と高さを取得してキャンバスを用意
  textSize(32); // 描画するテキストのフォントサイズを32ピクセルに設定
}

// テキストを常に画面中央に描画する
function draw() {
  background(30); // 背景を濃いグレーで塗る
  fill(255); // テキストを白で描く
  textAlign(CENTER, CENTER); // テキストの基準点を中央揃えに設定
  text('ようこそ p5.js の世界へ', width / 2, height / 2); // 画面の中心座標にメッセージを描画
}
```

## よくあるエラーと対策
- **キャンバスが表示されない**: `createCanvas()`を呼び出しているか確認しましょう。
- **背景が描き直されない**: `draw()`内で`background()`を呼び出していないと、前の描画が残り続けます。
- **スクリプトが動かない**: ブラウザの開発者ツールでエラーメッセージを確認し、ファイルパスや関数名のスペルを見直してください。

## 練習問題
1. キャンバスのサイズを`600x400`に変更し、背景色を好きな色に変えてみましょう。
2. 円の代わりに四角形を描いてみましょう。位置とサイズは自由に設定してください。
3. テキストのメッセージと色を自分の好きなものに変更してみましょう。

## 解答例
1. `createCanvas(600, 400);`と書き換え、`background(0, 120, 200);`のようにRGB値を変更します。
2. `circle()`の代わりに`rect(150, 150, 100, 100);`などと書き、四角形を描画します。
3. `text('Hello p5.js!', width / 2, height / 2);`や`fill(255, 215, 0);`など、任意の文字列と色を設定します。
