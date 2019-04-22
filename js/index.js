(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth /750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})
(document, window);

$(document).ready(function(){
    // 点击立即提速
    $('.tispeed').click(function () {
      showCover();
      var taocanti=  $(this).parent().find('p').eq(0).text();
      var money = $(this).parent().find('p').eq(1).text();
      $('.pop_content p:eq(2) span').text(taocanti);
      $('.pop_content p:eq(3) span').text(money);
      $('.again').show();
    })
    // 点击关闭窗口
    $('.close').on('click',function(){
        $('.pop').hide();
        hiddenCover();
    });
    // 跳转主页
    $('.choose .speed').on('click',function(){
        if( $('.zhanghao_list li').hasClass('list_biankuang')){
            $('.choose').hide();
            $('.page').show();
            }
    });
    // 点击立即提速
    $('.xiao_tisu').on('click',function(){
        $('.again').hide();
        var bandata =  commit_form ();
        if(bandata){
            // 办理成功页面
            $('.page').hide();
            $('.success').show(); 
        }else{
            // 无法办理1
            $('.nohandel_one').show(); 
             // 无法办理2
            $('.nohandel_two').show();
        }
        
    });
    // 立即参与
    $('.add_can').on('click',function(){
        $('.success').hide();
        hiddenCover();
        $('.choose').show();
    });

    // 点击返回
    $('.popreturn').on('click',function(){
        hiddenCover();
        $('.pop').hide();
    });
});

// 选择某一个宽带提速包
$(document).on('click','.zhanghao_list li',function () {
    $(this).toggleClass("list_biankuang").siblings('li').removeClass('list_biankuang');
    $(this).siblings('li').children('.right').hide();
    if( $(this).hasClass('list_biankuang')){
        $(this).children('.right').show();
    }else{
        $(this).children('.right').hide();  
    }
})
// 办理返回数据
function commit_form (val) {
    return false;
}
// 显示遮罩
function showCover(){
    $(".cover").css('height',$(document).height());
    $('.cover').css('width',$(document).width());
    $('.cover').show();
    $('.cover').css({'position':'fixed','top':0,"background-color":'rgba(0,0,0,.8)'});
}
function hiddenCover(){
    $('.cover').hide();
    $('body').css('position','unset');
}