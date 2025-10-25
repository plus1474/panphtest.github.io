let inputValue = ''; // テキストボックスからの値
let myCanvas; // キャンバス
let x0 = -10; // 波の開始x座標
let dx; // 波の終了x座標
let y0 = 400; // 波の基準高さ
let a = 40; // 振幅
let samp = 2; // サンプリング間隔
let f = 1.5; // 周波数 (区間に何周期入れるか)

function setup() {
    // ローカルストレージから入力値を取得
    inputValue = localStorage.getItem('p5jsInput') || '';

    // 画面サイズでキャンバスを作成
    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.position(0, 0);
    myCanvas.style('z-index', '-1');

    // 描画パラメータを初期化
    resetParameters();
}

function draw() {
    if (inputValue) {
        // 文字数に応じて複数のサイン波を描画
        for (let i = 0; i < inputValue.length; i++) {
            sinwave(x0, dx, y0 + i * 20, a + i * 5, samp, f + i * 0.15);
        }
    }
}

function sinwave(x0, dx, y0, a, samp, f) {
    let x1 = x0;
    // 線を青色に設定
    stroke(0, 0, 255);
    while (x1 + samp <= dx) {
        let x2 = x1 + samp;
        let y1 = y0 + a * sin(TWO_PI * f * (x1 - x0) / (dx - x0));
        let y2 = y0 + a * sin(TWO_PI * f * (x2 - x0) / (dx - x0));
        line(x1, y1, x2, y2);
        x1 = x2;
    }
}

function resetParameters() {
    // ウィンドウ幅に応じてdxを更新
    dx = windowWidth + 10;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    resetParameters(); // ウィンドウサイズ変更時にパラメータを更新
}
