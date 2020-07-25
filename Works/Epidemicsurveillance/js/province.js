    //导入Http类
    import {
        Httpajax
    } from './index.js'


    const Province = {
        // 发送数据请求
        datarequest() {
            Httpajax.get('http://api.tianapi.com/txapi/ncovcity/index?key=ac67f2bdd8d81b2cd18ad9b0599fa2ae').then(datas => {
                datas = JSON.parse(datas)
                let overalldata = datas.newslist
                let fragment1 = document.createDocumentFragment();
                let fragment2 = document.createDocumentFragment();
                let provinciallevel = this.getdom('.y_container')
                console.log(overalldata);
                overalldata.map((v, i, arr) => {
                    if (i == 1) {
                        console.log(v);

                    }
                    let y_panel = this.creaele('div')
                    y_panel.className = 'panel panel-default y_panel'
                    let panel_heading = this.creaele('div')
                    panel_heading.className = 'panel-heading'
                    let ul = this.creaele('ul')
                    ul.innerHTML =
                        ` <li>${v.provinceName}</li>
                    <li>${v.currentConfirmedCount}</li>
                    <li>${v.confirmedCount}</li>
                    <li>${v.deadCount}</li>
                    <li>${v.curedCount}</li>
                    <li></li>`

                    panel_heading.appendChild(ul)
                    y_panel.appendChild(panel_heading)

                    fragment1.appendChild(y_panel)
                        // console.log(y_panel);
                    if (i == arr.length - 1) {
                        provinciallevel.appendChild(fragment1)
                    }

                    // 获取市级
                    let vname = String(v.locationId)
                    v.cities.map((v1, i1, arr1) => {
                        v1.currentConfirmedCount = v1.currentConfirmedCount < 0 ? 0 : v1.currentConfirmedCount
                        let panel_body = this.creaele('div')
                        panel_body.className = 'panel-body'
                        let bodyul = this.creaele('ul')
                        bodyul.innerHTML =
                            ` <li>${v1.cityName}</li>
                        <li>${v1.currentConfirmedCount}</li>
                        <li>${v1.confirmedCount}</li>
                        <li>${v1.deadCount}</li>
                        <li>${v1.curedCount}</li>
                        <li></li>`
                        panel_body.appendChild(bodyul)
                        fragment2.appendChild(panel_body)

                        if (i1 == arr1.length - 1) {
                            y_panel.appendChild(fragment2)
                        }
                    })
                })
            })
        },
        // 获取元素
        getdom(dom) {
            return document.querySelector(dom)
        },
        // 创建元素
        creaele(dom) {
            return document.createElement(dom)
        },
        // 初始化
        inft() {
            this.datarequest()
        }
    }
    Province.inft()