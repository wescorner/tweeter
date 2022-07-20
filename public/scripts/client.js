/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

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
