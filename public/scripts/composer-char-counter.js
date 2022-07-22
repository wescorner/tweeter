$(function () {
  //calculate how many characters remain for display
  $("#tweet-text").on("input", function () {
    const input = $(this).val().length;
    const counter = 140 - input;
    const $charsRemaining = $(this).parent().find(".submit-tweet").find(".counter");
    $charsRemaining.text(counter);
    //display counter as red if over character limit
    if (counter < 0) {
      $charsRemaining.css("color", "red");
    } else {
      //hide error and display counter as gray when within correct range
      $("#error").slideUp();
      $charsRemaining.css("color", "#545149");
    }
  });
});
