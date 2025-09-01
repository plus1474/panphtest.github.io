let inputValue = '';
let myCanvas;

function setup() {
    // ローカルストレージから入力値を取得
    inputValue = localStorage.getItem('p5jsInput') || '';

    // 画面サイズでキャンバスを作成
    myCanvas = createCanvas(windowWidth, windowHeight - 100);
    myCanvas.position(0, 100);
    myCanvas.style('z-index', '-1');
}

function draw() {
    background(220); // 毎回背景をクリア

    // もし入力値があれば、それを使って模様を描画
    if (inputValue) {
        const numCircles = inputValue.length;
        const spacing = width / (numCircles + 1);

        for (let i = 0; i < numCircles; i++) {
            let r = i * 20 % 255;
            let g = (i + 1) * 30 % 255;
            let b = (i + 2) * 40 % 255;
            fill(r, g, b, 150);
            noStroke();

            circle((i + 1) * spacing, height / 2, 50);
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 100);
}
