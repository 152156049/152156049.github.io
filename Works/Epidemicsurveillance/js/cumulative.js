    //导入Http类
    import {
        Httpajax
    } from './index.js'
    const Cumulative = {
        // 获取全国累计数据
        cumulative() {
            Httpajax.get('http://api.tianapi.com/txapi/ncov/index?key=ac67f2bdd8d81b2cd18ad9b0599fa2ae').then(datas => {
                datas = JSON.parse(datas)
                let overalldata = datas.newslist[0].desc
                let str = 'currentConfirmedCount,confirmedCount,curedCount,deadCount,suspectedCount,seriousCount,confirmedIncr,curedIncr,deadIncr,currentConfirmedIncr,suspectedIncr,seriousIncr'
                let data = {}
                for (let key in overalldata) {
                    if (str.includes(key)) {

                        data[key] = overalldata[key]
                    }
                }
                // 渲染到页面
                $('.statistics_top').find('strong').eq(0).text(data.confirmedCount)
                $('.statistics_top').find('strong').eq(1).text(data.curedCount)
                $('.statistics_top').find('strong').eq(2).text(data.deadCount)

                $('.statistics_bottom').find('strong').eq(0).text(data.currentConfirmedCount)
                $('.statistics_bottom').find('strong').eq(1).text(data.suspectedCount)
                $('.statistics_bottom').find('strong').eq(2).text(data.seriousCount)

                $('.statistics_top').find('span').eq(0).text(data.confirmedIncr)
                $('.statistics_top').find('span').eq(1).text(data.curedIncr)
                $('.statistics_top').find('span').eq(2).text(data.deadIncr)

                $('.statistics_bottom').find('span').eq(0).text(data.currentConfirmedIncr)
                $('.statistics_bottom').find('span').eq(1).text(data.suspectedIncr)
                $('.statistics_bottom').find('span').eq(2).text(data.seriousIncr)
            })
        },
        inft() {
            this.cumulative()
        }
    }
    Cumulative.inft()