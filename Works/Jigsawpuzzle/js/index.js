        var size = 4;
        var stage = document.querySelector(".stage");
        for (var i = 0; i < size * size; i++) {
            var node = document.createElement("li");
            // 动态设置尺寸
            node.style.width = 100 / size + "%";
            node.style.height = 100 / size + "%";

            // 设置背景偏移
            node.style.backgroundPosition =
                (i % size) * -100 +
                "% " +
                Math.floor(i / size) * -100 +
                "%";

            node.style.left = (i % size) * (100 / size) + "%";
            node.style.top = Math.floor(i / size) * (100 / size) + "%";


            node.style.backgroundSize = size * 100 + '% auto'

            node.draggable = "true";

            node.id = "card" + i;
            stage.appendChild(node);
        }

        var cards = stage.querySelectorAll("li");

        // 洗牌
        function shuffle() {
            var arr = [];
            for (var i = 0; i < size * size; i++) {
                arr.push(i);
            }
            // console.log(arr);

            var tmp = [];

            for (var i = 0; i < size * size; i++) {
                tmp.push(
                    arr.splice(Math.floor(Math.random() * arr.length), 1)[0]
                );
            }
            // console.log(tmp);

            cards.forEach(function(element, index) {
                element.style.left =
                    (tmp[index] % size) * (100 / size) + "%";
                element.style.top =
                    Math.floor(tmp[index] / size) * (100 / size) + "%";
            });
        }
        // shuffle();

        cards.forEach(function(element, index) {
            element.ondragstart = function(event) {
                event.dataTransfer.setData("text", event.target.id);
            };
            element.ondragover = function(event) {
                // console.log('x')
                event.preventDefault();
            };
            element.ondrop = function(event) {
                // console.log("drop", event.target, event.dataTransfer.getData('text'));

                // 获取两个元素
                var e1 = event.target;
                var e2 = document.getElementById(
                    event.dataTransfer.getData("text")
                );

                // 交叉互换定位
                var tmp = {
                    top: e1.style.top,
                    left: e1.style.left,
                };
                // console.log(tmp);
                e1.style.top = e2.style.top;
                e1.style.left = e2.style.left;

                e2.style.top = tmp.top;
                e2.style.left = tmp.left;
                // console.log(e1, e2);

                // 判断每个cards当前定位点 是不是 初始定位点

                var check = Array.prototype.every.call(cards, function(element, index) {
                    return (
                        parseInt(element.style.top) ==
                        parseInt(
                            Math.floor(index / size) * (100 / size) +
                            "%"
                        ) &&
                        parseInt(element.style.left) ==
                        parseInt((index % size) * (100 / size) + "%")
                    );
                });
                // var check = cards.every(function (element, index) {

                // });
                // console.log(check);

                if (check) {
                    // console.log("成功");
                    alert('成功')
                }
            };
        });

        //储存
        var archivearray = []

        function file() {
            localStorage.clear()
            archivearray = []
            cards.forEach(function(element, index) {
                archivearray.push({
                    eletop: element.style.top,
                    eleleft: element.style.left
                })
            })
            localStorage.setItem("archiveddata", JSON.stringify(archivearray))
        }

        // 载入
        function load() {
            var origin = JSON.parse(localStorage.getItem("archiveddata"))
            cards.forEach(function(element, index) {
                element.style.top = origin[index].eletop
                element.style.left = origin[index].eleleft
            })
        }