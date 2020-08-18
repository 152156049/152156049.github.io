// 获取元素
var canvas = document.querySelector("#canvas");
var bool = true;

// 获取画板绘图上下文(api)
var context = canvas.getContext("2d");
// 设置背景图
imgset = document.querySelector("#scream");
context.drawImage(imgset, 0, 0, 1000, 500);
// 定义颜色
var color = "black";
var size = 10;
// 定义线条方法

function onMove(e) {
    // 线条移动坐标点
    context.lineTo(e.offsetX, e.offsetY);

    // 线条粗细
    context.lineWidth = size;

    context.lineJoin = "round";

    context.lineCap = "round";

    context.miterLimit = 3;
    // 设置颜色
    context.strokeStyle = color;
    // 描边
    context.stroke();
    // console.log(e.offsetX, e.offsetY);
}

// 定义事件(鼠标按下)
canvas.addEventListener("mousedown", function(e) {
    // 画布开始渲染
    context.beginPath();
    // 笔线按下(笔线坐标=鼠标坐标)
    context.moveTo(e.offsetX, e.offsetY);

    // 鼠标按下(定义鼠标移动事件)
    canvas.addEventListener("mousemove", onMove);
});

// 定义鼠标松开事件
canvas.addEventListener("mouseup", function(e) {
    // 停止鼠标移动事件
    canvas.removeEventListener("mousemove", onMove);
    // 结束笔线渲染
    context.closePath();
});
var box_canvas = document.querySelector(".box-canvas");
var box_eraser = document.createElement("div");
var box_per = document.createElement("div");
box_per.className = "per";
box_per.style.width = size + "px";
box_per.style.height = size + "px";

// 设置颜色
document.querySelector(".colorset").onchange = function() {
    color = this.value;
};

// 设置大小
document
    .querySelector(".rangeset input")
    .addEventListener("input", function() {
        size = parseInt(this.value);
        box_eraser.style.width = size + "px";
        box_eraser.style.height = size + "px";
        box_per.style.width = size + "px";
        box_per.style.height = size + "px";
        console.log(size);
        document.querySelector(".rangeset span").innerHTML = size;
    });

// 清空
document.querySelector(".empty").onclick = function() {
    context.clearRect(0, 0, 1000, 500);
};

// 橡皮擦

document.querySelector(".eraser").onclick = function() {
    color = "#fff";
    // size = 40
    box_eraser.style.display = "block";
    box_per.style.display = "none";

    box_eraser.style.width = size + "px";
    box_eraser.style.height = size + "px";
    box_canvas.appendChild(box_eraser);
    box_eraser.className = "active";

    canvas.addEventListener("mousemove", function(eve) {
        box_eraser.style.left = eve.offsetX - (size - 3) / 2 + "px";
        box_eraser.style.top = eve.offsetY - (size - 3) / 2 + "px";
    });
};

// 手写笔
canvas.addEventListener("mousemove", function(eve) {
    box_canvas.appendChild(box_per);
    box_per.style.left = eve.offsetX - (size - 3) / 2 + "px";
    box_per.style.top = eve.offsetY - (size - 3) / 2 + "px";
    // box_eraser.style.display = "block"
    // box_per.style.display = "block"
});
// 鼠标移出
canvas.addEventListener("mouseleave", function(eve) {
    // box_eraser.style.display = "none"
    // box_per.style.display = "none"
});
document.querySelector(".pen").onclick = function() {
    color = document.querySelector(".colorset").value;
    size = document.querySelector(".rangeset input").value;
    box_eraser.style.display = "none";
    box_per.style.display = "block";
};