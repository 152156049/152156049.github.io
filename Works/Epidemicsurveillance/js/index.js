'module'
// ajax请求模块
class Http {
    // get请求
    get(url) {

        return new Promise((resolved, rejected) => {

            // 创建ajax对象
            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {

                if (this.readyState == 4 && this.status == 200) {
                    // 凝固结果
                    resolved(this.responseText);
                }
            }

            // 建立服务器请求链接
            xhr.open('GET', url, true)

            // 发送请求
            xhr.send()
        })
    }
}
// 导出模块
export const Httpajax = new Http();


// 点击省级显示市级
$('.y_container').on('click', '.panel-heading', function() {
    $(this).siblings().stop().slideToggle().
    parent().siblings().find('.panel-body').
    stop().slideUp()
})