// setup()は最初の1回だけ呼び出される初期化関数
function setup() {
  createCanvas(400, 400); // 400x400ピクセルのキャンバスを作成
}

// draw()は初期設定で1秒間に60回繰り返し実行される
function draw() {
  background(220); // 背景を薄いグレーで塗る
  circle(200, 200, 50); // 画面中央に直径50pxの円を描く
}
