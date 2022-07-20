/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
  const tweetData = {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  };

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
        <p>${tweetData.created_at}</p>
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

  const $tweet = createTweetElement(tweetData);
  const $tweet2 = createTweetElement(tweetData);
  console.log($tweet);
  $("#tweets-container").append($tweet);
  $("#tweets-container").append($tweet2);
});
