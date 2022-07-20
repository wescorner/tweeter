/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
      <p>${tweetData.content.text}</p>
      <footer>
        <p>${timeago.format(tweetData.created_at)}</p>
        <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-arrows-rotate"></i>              
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `);
    return tweet;
  };

  const renderTweets = function (tweetsArray) {
    //take in an array of tweet objects and append each one to tweets-container
    tweetsArray.forEach((element) => {
      const $tweet = createTweetElement(element);
      $("#tweets-container").append(createTweetElement(element));
    });
  };

  $(".tweet-form").submit(function (event) {
    event.preventDefault();
    const $serializedData = $(this).serialize();
    const $inputLength = $("#tweet-text").val().length;
    if ($inputLength < 1 || $inputLength > 140) {
      return alert("Tweets must be between 1-140 characters!");
    }
    $.post("http://localhost:8080/tweets/", $serializedData, function (data) {
      console.log($serializedData);
    });
  });

  const loadTweets = function () {
    //make request to /tweets and receive array of tweets as JSON
    $.get("http://localhost:8080/tweets/").done(function (data) {
      renderTweets(data);
    });
  };
  loadTweets();
});
