$(function () {
    //    点击 + 按钮,将购物车中商品数量加1

    $(".addCart").click(function () {
        $this = $(this)
        cartid = $this.parents("li").attr("cartid")
        // alert(cartid)
        addUrl = "/axf/addCart";


        //    ajax请求
        $.getJSON(addUrl, {"cartid": cartid}, function (data) {
            if (data["code"] == 200) {
                // alert(data["num"])
                //    修改数量
                $this.prev("span").html(data["num"])
            }
        })
    })


    //    点击 + 按钮,将购物车中商品数量加1

    $(".subCart").click(function () {
        $this = $(this)

        cartid = $this.parents("li").attr("cartid")
        // alert(cartid)

        addUrl = "/axf/subCart";


        //    ajax请求
        $.getJSON(addUrl, {"cartid": cartid}, function (data) {
            if (data["code"] == 200) {
                // alert(data["num"])
                //    修改数量
                $this.next("span").html(data["num"])
            }
            else if (data["code"] == 300) { //移除该整个商品记录
                $this.parents("li").remove()

            }
        })
    });


    //勾选按钮的点击事件
    $(".select_button").click(function () {
        var $this = $(this);
        var cartid = $this.parent("li").attr("cartid");

        urlpath = "axf/chanageSelectStatu";
        dataParam = {'cartid':cartid};

        //修改服务器的状态


        $.getJSON(urlpath,dataParam,function (data) {
            if(data['code'] == 200){//请求成功
                if(data['isselect']){
                    $this.html("<span>√</span>")

                }else {
                    $this.html("<span></span>")

                }
            }

        })

    })



    //给全选按钮设置点击事件

        //     测试:




//  点击选好了按钮,生成一个订单


});



