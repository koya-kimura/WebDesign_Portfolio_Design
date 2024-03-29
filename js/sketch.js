let sketch; //出力するファイルの名前を定義

function windowResized() {
    resizeCanvas(windowWidth, 650, WEBGL);
}

function setup() {
    canvas = createCanvas(windowWidth, 650, WEBGL);
    canvas.position(0, 0); //canvasをページの原点に固定
    canvas.style('z-index', '-1'); //canvasを後ろに移動する
}

function draw() {
    background(255, 1);

    noFill();
    stroke(0, 90)
    for (let i = 0; i < 10; i++) {
        push();
        rotateX((frameCount + i*10) / 100);
        rotateY((frameCount + i*10) / 100);
        box(450+sin(frameCount/200)*300);
        pop();
    }
}

new p5(sketch, "p5-canvas");