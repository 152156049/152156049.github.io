const Upload = {
    // 创建元素
    getdom(element) {
        return document.querySelector(element)
    },
    // 上传图片
    setimg() {
        const input = document.querySelector('input[type=file]')

        input.addEventListener('change', () => {
            var files = input.files

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader()

                reader.onload = () => {
                    console.log(reader.result)

                    let box = this.getdom('.box')

                    const divimg = document.createElement('div')

                    divimg.innerHTML = '<span class="removeimg">×</span>'


                    const img = new Image()

                    divimg.className = 'boximg'

                    let imga = reader.result

                    img.setAttribute('index', imga)


                    divimg.style.backgroundImage = `url(${imga})`

                    divimg.appendChild(img)

                    box.appendChild(divimg)


                }
                reader.readAsDataURL(files[i])

            }


        })

    },
    // 删图片
    removeimg() {
        $('.box').on('click', '.removeimg', function() {

            $(this).parent().fadeOut(function() {

                $(this).remove()
            })
        })
    },
    // 放大图片
    enlarge() {
        $('.box').on('click', '.boximg img', function() {

            let imgurl = $(this).attr('index')

            let enlarge = document.createElement('div')

            let img = document.createElement('img')

            enlarge.className = 'enlarge'

            img.src = imgurl

            enlarge.appendChild(img)

            document.body.appendChild(enlarge)

        })
        $('body').on('click', '.enlarge', function() {

            $(this).fadeOut(function() {

                $(this).remove()

            })
        })

    },
    // 初始化
    intf() {
        this.setimg()
        this.removeimg()
        this.enlarge()
    }
}
Upload.intf()