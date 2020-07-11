function Page(option) {

    this.liping = [{
        left: "0px",
        top: "0px",
        name: "京东卡",
        mm: "10元"
    }, {
        left: "150px",
        top: "0px",
        name: "京东卡",
        mm: "20元"
    }, {
        left: "300px",
        top: "0px",
        name: "京东卡",
        mm: "30元"
    }, {
        left: "300px",
        top: "150px",
        name: "京东卡",
        mm: "100元"

    }, {
        left: "300px",
        top: "300px",
        name: "谢谢惠顾",
        mm: " "
    }, {
        left: "150px",
        top: "300px",
        name: "京东卡",
        mm: "200元"
    }, {
        left: "0px",
        top: "300px",
        name: "京东卡",
        mm: "500元"


    }, {
        left: "0px",
        top: "150px",
        name: "iQOO Pro手机",
        mm: " "
    }]

    this.start_btn = document.getElementById("start_btn")
    this.start_text = document.getElementById("start_text")
    this.active = document.getElementsByClassName("active")[0]
}
// 随机数方法
Page.prototype.random = function(max, min) {
    return Math.floor(Math.random() * (max - min) + min)
}

// 点击事件
Page.prototype.domElement = function() {
        var _this = this;
        var start_btn = this.start_btn
        var dsq = null;
        var i = 0;
        var v1 = 0;
        this.start_btn.onclick = function() {
            this.style.display = "none"
            _this.start_text.style.display = "block"
            var bushu = _this.random(8, 0);
            var quanshu = _this.random(4, 4);
            // console.log("中奖索引:" + bushu);
            // console.log("转的圈数:" + quanshu);


            clearInterval(dsq);
            dsq = setInterval(function() {
                i++;

                if (i > 7) {
                    i = 0
                }
                if (i == 0) {
                    v1++
                }
                if (v1 >= quanshu && i == bushu) {
                    clearInterval(dsq);
                    console.log(_this.liping[i].name, _this.liping[i].mm);
                    start_btn.style.display = "block"
                    _this.start_text.style.display = "none"
                    v1 = 0
                }

                animate(_this.active, {
                    left: _this.liping[i].left,
                    top: _this.liping[i].top
                })

                _this.start_text.innerHTML = v1


            }, 200)

        }
    }
    //格式化
Page.prototype.info = function() {
    this.domElement()


}

var xiaoye = new Page();
xiaoye.info()