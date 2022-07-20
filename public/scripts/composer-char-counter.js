$(function () {
  $("#tweet-text").on("input", function () {
    const input = $(this).val().length;
    const counter = 140 - input;
    const $charsRemaining = $(this).parent().find(".submit-tweet").find(".counter");
    $charsRemaining.text(counter);
    if (counter < 0) {
      $charsRemaining.css("color", "red");
    } else {
      $("#error").slideUp();
      $charsRemaining.css("color", "#545149");
    }
  });
});
