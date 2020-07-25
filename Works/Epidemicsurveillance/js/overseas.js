//导入Http类
import {
    Httpajax
} from "./index.js";

// 海外数据

const Overseas = {
    // 请求数据
    datarequest() {
        Httpajax.get(
            "http://api.tianapi.com/txapi/ncovabroad/index?key=ac67f2bdd8d81b2cd18ad9b0599fa2ae"
        ).then((datas) => {
            datas = JSON.parse(datas);
            // console.log(datas);
            let overalldata = datas.newslist;
            // 分类
            let pros = {};
            let fragment = document.createDocumentFragment();
            overalldata.map(v => {
                if (!pros[v.continents]) {
                    pros[v.continents] = []
                }
                pros[v.continents].push(v)
            })
            for (let key in pros) {
                let y_panel = this.creaele('div')
                y_panel.className = 'panel panel-default y_panel'
                let panel_heading = this.creaele('div')
                panel_heading.className = 'panel-heading'
                y_panel.appendChild(panel_heading)
                let ul = this.creaele('ul')
                let existing = 0 //现有确诊
                let cumulative = 0 //累计确诊
                let death = 0 //死亡
                let cure = 0 //累计确诊

                pros[key].map((v, i, arr) => {
                    v.currentConfirmedCount = v.currentConfirmedCount < 0 ? 0 : v.currentConfirmedCount

                    if (v.continents == key) {
                        existing += v.currentConfirmedCount
                        cumulative += v.confirmedCount
                        death += v.deadCount
                        cure += v.curedCount

                        let panel_body = this.creaele('div')
                        panel_body.className = 'panel-body'
                        let ul = this.creaele('ul')
                        ul.innerHTML = `<li>${v.provinceName}</li>
                        <li>${v.currentConfirmedCount}</li>
                        <li>${v.confirmedCount}</li>
                        <li>${v.deadCount}</li>
                        <li>${v.curedCount}</li>
                        <li></li>`

                        panel_body.appendChild(ul)
                        fragment.appendChild(panel_body)
                        if (i == arr.length - 1) {
                            y_panel.appendChild(fragment)
                        }
                    }

                })
                ul.innerHTML = `<li>${key}</li>
                <li>${existing}</li>
                <li>${cumulative}</li>
                <li>${death}</li>
                <li>${cure}</li>
                <li></li>`

                panel_heading.appendChild(ul)
                this.getdom('.y_haiwai').appendChild(y_panel)


            }
            // 统计全球
            let cumulative = 0 //累计确诊
            let existing = 0 //现有确诊
            let cure = 0 //累计
            let death = 0 //死亡
            let arrnum = []
            let arrname = []
                // console.log(overalldata);

            overalldata.map((v, i, arr) => {
                // console.log(v.confirmedCount, i);
                cumulative += v.confirmedCount
                existing += v.currentConfirmedCount
                cure += v.curedCount
                death += v.deadCount
                if (i <= 3) {
                    // console.log(v);

                    // console.log(v.currentConfirmedCount);

                    arrnum.push(v.confirmedCount)
                    arrname.push(v.provinceName)
                }


            })

            $('.y_quanqiu .statistics_top').find('strong').eq(0).text(cumulative)
            $('.y_quanqiu .statistics_top').find('strong').eq(1).text(existing)
            $('.y_quanqiu .statistics_top').find('strong').eq(2).text(cure)
            $('.y_quanqiu .statistics_top').find('strong').eq(3).text(death)
            for (let i = 0; i < arrnum.length; i++) {
                $('.y_quanqiu .statistics_bottom .name').eq(i).text(arrname[i] + '确诊')
                $('.y_quanqiu .statistics_bottom .num').eq(i).find('strong').text(arrnum[i])
            }

        });
    },


    // 获取元素
    getdom(dom) {
        return document.querySelector(dom);
    },
    // 创建元素
    creaele(dom) {
        return document.createElement(dom);
    },
    // 初始化
    inft() {
        this.datarequest();
    },
};
Overseas.inft();