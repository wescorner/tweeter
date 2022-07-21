$(function () {
  const createTweetElement = function (tweetData) {
    //return <article> html element that contains the entire HTML structure of tweet
    const tweet = $(`
    <article class="tweet">
      <header>
        <div class="name">
          <img src="${tweetData.user.avatars}" />
          <div>${tweetData.user.name}</div>
        </div>
        <div class="tag">${tweetData.user.handle}</div>
      </header>
      <p>${escape(tweetData.content.text)}</p>
      <footer>
        <p>${timeago.format(tweetData.created_at)}</p>
        <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>              
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
    return tweet;
  };

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = function (tweetsArray) {
    //take in an array of tweet objects and append each one to tweets-container
    tweetsArray.forEach((element) => {
      $("#tweets-container").prepend(createTweetElement(element));
    });
  };

  const loadTweets = function () {
    //make request to /tweets and receive array of tweets as JSON
    $.get("http://localhost:8080/tweets/").done(function (data) {
      renderTweets(data);
    });
  };

  const loadNewTweet = function () {
    //same as loadTweets() but for only the most recent tweet
    $.get("http://localhost:8080/tweets/").done(function (data) {
      $("#tweets-container").prepend(createTweetElement(data[data.length - 1]));
    });
  };

  $(".tweet-form").submit(function (event) {
    //submit Ajax POST of form
    event.preventDefault();
    const $serializedData = $(this).serialize();
    const $inputLength = $("#tweet-text").val().length;
    if ($inputLength < 1 || $inputLength > 140) {
      return $("#error").slideDown();
    }
    $.post("http://localhost:8080/tweets/", $serializedData).done(function () {
      $("#tweet-text").val("");
      $(".counter").text("140");
      loadNewTweet();
    });
  });

  $("#new-tweet-button").click(function () {
    //slide toggle of compose tweet section on button press
    $(".new-tweet").slideToggle();
    $("#tweet-text").focus();
  });

  $("#tweet-text").keypress(function (key) {
    //allowing user to submit tweet via Enter key
    if (key.which === 13 && !key.shiftKey) {
      key.preventDefault();
      $(".tweet-form").submit();
    }
  });

  $(window).scroll(function () {
    //only display scroll-to-top button when user is not at top of page
    if ($(window).scrollTop() > 1) {
      $("#scroll-to-top").fadeIn("fast");
      $("#new-tweet-button").fadeOut("fast");
    } else {
      $("#scroll-to-top").fadeOut("fast");
      $("#new-tweet-button").fadeIn("fast");
    }
  });

  $("#scroll-to-top").click(function () {
    //scroll to top and focus text area on button click
    $(".new-tweet").slideDown();
    $(window).scrollTop(0);
    $("#tweet-text").focus();
  });

  loadTweets();
});
