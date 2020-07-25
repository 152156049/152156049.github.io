let Chinalinkage = {
    // 遍历省级
    province() {
        let fragment = document.createDocumentFragment();
        for (key in China.province_list) {
            let options = this.create("option");
            options.innerText = China.province_list[key];
            options.value = key;
            fragment.appendChild(options);
        }
        this.getdom("#province_list").appendChild(fragment);
    },
    // 遍历市级
    city() {
        this.getdom("#province_list").onchange = () => {
            this.getdom(".conter").innerText = "";
            this.getdom("#city_list").innerHTML = "";
            this.getdom("#city_list").innerHTML =
                '<option value="选择市" checked="checked">请选择市</option>';
            this.getdom("#county_list").innerHTML =
                '<option value="选择区" checked="checked">请选择区</option>';
            let fragment = document.createDocumentFragment();
            let bianhao = this.getdom("#province_list").value;
            bianhao = bianhao.slice(0, 2);
            for (key in China.city_list) {
                if (key.startsWith(bianhao)) {
                    let options = this.create("option");
                    options.innerText = China.city_list[key];
                    options.value = key;
                    fragment.appendChild(options);
                }
            }
            this.getdom("#city_list").appendChild(fragment);
        };
    },
    // 遍历区级
    county() {
        this.getdom("#city_list").onchange = () => {
            this.getdom(".conter").innerText = "";
            this.getdom("#county_list").innerHTML = "";
            this.getdom("#county_list").innerHTML =
                '<option value="选择区" checked="checked">请选择区</option>';
            let fragment = document.createDocumentFragment();
            let bianhao = this.getdom("#city_list").value;
            bianhao = bianhao.slice(0, 4);
            for (key in China.county_list) {
                if (key.startsWith(bianhao)) {
                    let options = this.create("option");
                    options.innerText = China.county_list[key];
                    options.value = key;
                    fragment.appendChild(options);
                }
            }
            this.getdom("#county_list").appendChild(fragment);
        };
    },
    // 渲染详情地址
    details() {
        this.getdom("#county_list").onchange = () => {
            let province = this.getdom("#province_list").value;
            let city = this.getdom("#city_list").value;
            let county = this.getdom("#county_list").value;
            province = this.getdetails(province, China.province_list);
            city = this.getdetails(city, China.city_list);
            county = this.getdetails(county, China.county_list);
            if (province && city && county) {
                var text = `位于:${province}${city}${county}`;
                this.getdom(".conter").innerText = text;
            } else {
                this.getdom(".conter").innerText = "";
            }
        };
    },
    // 获取当前选择的地区名
    getdetails(nameid, obj) {
        for (key in obj) {
            if (nameid == key) {
                return (nameid = obj[key]);
            }
        }
    },
    // 获取元素的方法
    getdom(element) {
        return document.querySelector(element);
    },
    // 创建元素
    create(tagName) {
        return document.createElement(tagName);
    },
    // 初始化的方法
    intf() {
        this.province();
        this.city();
        this.county();
        this.details();
    },
};
Chinalinkage.intf();