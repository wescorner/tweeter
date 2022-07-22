# Tweeter Project

Tweeter is a simple yet responsive single-page Twitter clone, and is built with JS, Jquery, Ajax, HTML, CSS, SCSS. When using Tweeter, the user can select the "Write Tweet" button to drop down a tweet submit form, that lets a user enter a tweet between 1-140 characters. (This input is sanitized, so don't bother trying any XSS injection!) If the user tries to submit a tweet not within 1-140 characters, an error drops down notifying the user, which can be sent away by correcting the number of characters that are inputted. Tweeter's reponsive design gives two different layouts: one for mobile/tablet, and one for desktop. When the user's screen width is above 1024px, the desktop view is rendered. When the user's screen width is between 512-1024px, the tablet view is rendered. And when the user's screen width is below 512px, the mobile view is rendered, which is just the tablet view with smaller tweet text and a smaller nav-bar.

## Getting Started

1. [Create](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) a new repository using this repository as a template.
2. Clone your repository onto your local device.
3. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Node 5.10.x or above
- Express
- Chance
- MD5

## Tweeter in action

- [desktop-view](https://github.com/wescorner/tweeter/blob/master/docs/desktop-view.gif?raw=true)

- [resizing](https://github.com/wescorner/tweeter/blob/master/docs/resize.gif?raw=true)
