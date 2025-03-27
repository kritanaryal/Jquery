
$(document).ready(function(){

   $("#add").click(function(){
    let firstNum= $("#first-number").val();
    let secondNum= $("#second-number").val();
     result = parseInt(firstNum) + parseInt(secondNum);
    $("#result").text('Addition result is:'+result);

   })


   $("#sub").click(function(){
    let firstNum= $("#first-number").val();
    let secondNum= $("#second-number").val();
     result = parseInt(firstNum) - parseInt(secondNum);
    $("#result").text('Subtraction result is:'+result);

   })

let hide = false;
   $('.control-btn').click(function(){
hide = !hide;
if(hide){
    $('.card').hide();
$('.control-btn').text('Show Details');
$('.control-btn').css('background-color','orange');
}else{
    $('.card').show();
    $('.control-btn').text('Hide Details');
    $('.control-btn').css('background-color','red');
}



   })

})