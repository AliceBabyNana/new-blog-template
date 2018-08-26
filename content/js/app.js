onload=()=>{
    $("#content .post-body img").SetImgResponsive();
};





$.fn.SetImgResponsive = function () {
    $(this).addClass('img-responsive');
};