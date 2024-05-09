$(function(){
  // 文字色変化
  $('#change-color').on('click',function(){
     $('#target').css('color','red');
  });
   
    //  hello変化
    $('#change-text').on('click',function(){
      $('#target').text('Hellow');
    });

      // 文字消し
    $(function(){
      $('#fade-out').on('click',function(){
        $('#target').hide();
      });

      $(function(){
        $('#fade-in').on('click',function(){
          $('#target').show();
        });
      });
    });
});