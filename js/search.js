/**
 *  js判断input输入框中是否有值，以此来判断是否隐藏默认提示信息
 *  使用keyup事件
 */
$(function() {
    $('#input').on('keyup',function() {
        var len = document.getElementById('input').value;
        if(len == ''){
            $('#text').show();
            $('#pic').show();
        }else{
            $('#text').hide();
            $('#pic').hide();
        }
    });
})
