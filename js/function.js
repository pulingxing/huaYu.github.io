function loadHeader(url) {
    $.get(url,function (datas) {
        $("header").html(datas);
        judgeX();
        $("header").on("click",".user_info_box p",function () {
            window.location.href = "pages/personnal.html"
        })
        $("header").on("click",".login",function () {
            window.location.href = "pages/login.html"
        })
        $("header").on("click",".logo",function () {
            window.location.href = "../index.html"
        })

    })
}


function loadFooter(url) {
    $.get(url,function (datas) {
        $("footer").html(datas);
    })
}

function loadJson(url) {
    $.getJSON(url,function (goodsData) {
        console.log(goodsData)
        for(var i = 0;i<goodsData.Title.length;i++){
            $(".title_list").append("<li class='title_item title'>" + goodsData.Title[i] + "</li>")
            goodsData.goods.forEach(function (item ,idx) {
                $(".heading").text(goodsData.goods[0].title);
                $("section img").eq(idx).attr("src",goodsData.goods[idx].src);
                $(".goods_name").eq(idx-1).text(goodsData.goods[idx].goodsName);
                $(".sales").eq(idx-1).text(goodsData.goods[idx].sales);
                $(".goods_pri").eq(idx-1).text(goodsData.goods[idx].pri)
            })
        }
    })
}

function tab(){
    var  oNext = $(".show")
    if (oNext.next().length === 0){
        $(".figure_banner img:first-child").addClass("show").siblings().removeClass("show")
    }else {
        oNext.next().addClass("show").siblings().removeClass("show")
    }
}

function idots(){
    var oNext = $(".cl")
    if (oNext.next().length === 0){
        $(".figure_ctr span:first-child").addClass("cl").siblings().removeClass("cl")
    }else {
        oNext.next().addClass("cl").siblings().removeClass("cl")
    }
}
function idotsClick() {
    var idot = $(".figure_ctr span")
    idot.bind("click", function () {
        var i = $(this).index();
        console.log(i)
        $(".figure_banner img").eq(i).addClass("show").siblings().removeClass("show")
        $(this).addClass("cl").siblings().removeClass("cl")
    })
}


function loadMain(url) {
    $.get(url,function (datas) {
        $("section").html(datas);
    })

}
function judgeX() {
    var oStorage = sessionStorage.getItem("curUser")
    if (oStorage != null){
        $(".user_info_box").css("display","block").html("<P>"+ "欢迎您，" + oStorage + "</p>")
        $(".login").remove()
    }else {
        return;
    }
}

