// ウィンドウ全体を使ってテキストを表示するサンプル
function setup() {
  createCanvas(windowWidth, windowHeight); // ブラウザのウィンドウ幅と高さでキャンバスを生成
  textSize(32); // テキストサイズを32ピクセルに設定
}

function draw() {
  background(30); // 毎フレーム背景を濃いグレーで塗り直す
  fill(255); // テキストを白で描画
  textAlign(CENTER, CENTER); // テキスト揃えを中央に設定
  text('ようこそ p5.js の世界へ', width / 2, height / 2); // 画面中央へ挨拶メッセージを描く
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // ウィンドウサイズ変更時も全面表示を維持する
}
