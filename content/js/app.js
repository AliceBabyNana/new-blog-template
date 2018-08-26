$(function () {

    InitBlogSetting();
});



$.fn.SetImgResponsive = function () {
    $(this).addClass('img-responsive');
};



const InitBlogSetting = () => {
    //set sidebar icon dsec 
    $(".my-item>a").each((i, v) => {
        const str = $(v).data('tip');
        $(v).hover(() => {
            layer.tips(str, v, {
                tips: [1, '#ef8585'] //还可配置颜色
            });
        });
    });
    //set article content img responsive
    $("#content .post-body img").SetImgResponsive();
    $(".closebar").click(()=>{
        $(".sidebar").css("display","none");
        $("#content").css("width","100%");
    });
}

