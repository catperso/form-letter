$(document).ready(function() {
  $("#formOne").submit(function(event){
    const yourName = $("input#yourName").val();
    const address1 = $("input#address1").val();
    const address2 = $("input#address2").val();

    $(".yourName").text(yourName);
    $(".address1").text(address1);
    $(".address2").text(address2);

    $("#letter").show();

    event.preventDefault();
  })
});