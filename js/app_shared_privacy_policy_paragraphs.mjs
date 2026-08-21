import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_privacy_policy_paragraphs() {
  "What the privacy policy page says, in the order a person reads it.";
  "Every sentence here is a claim about what the code does, so the words are kept apart from the painting of them - somebody checking whether the policy is still true has one short file to read, and does not have to walk past the styling to find the promises.";
  "It is written for a stranger rather than for a lawyer. Somebody deciding whether to type a message on a contact screen wants to know what happens to it, and that answer should be the first thing they can find rather than the thing under six headings of definitions.";
  "A paragraph is a list of pieces rather than one string, because two of the promises name an address a person is meant to be able to go to, and one of those addresses sits in the middle of its sentence rather than at the end. A piece that is plain text is written as text; a piece that is somewhere to go carries the words to show and the address to go to, and the drawing turns that one into a link.";
  arguments_assert(arguments, 0);
  let paragraphs = [
    [
      "This website does not ask who you are. There is no account, no sign-up, no password, and no email address to give.",
    ],
    [
      "What an app remembers - the passage you were reading, the settings you chose - is kept by your own browser on your own device. Clearing this website's storage in your browser erases it.",
    ],
    [
      "Bible text and the other things an app needs are downloaded from Google storage as you read. Those files are the same for everybody, and they are only ever read.",
    ],
    [
      "One thing leaves your device, and only when you send it. If you write a message on a contact screen and press send, three things are stored: the message you wrote, the address of the page you wrote it on, and the time. They are filed under a random number your browser made up the first time you used a contact screen. That number is not a name and is not connected to one.",
    ],
    [
      "Messages can be written but not read back. The place they are kept is closed to reading over the web, so no visitor to this website can read anybody's messages, including their own. Only the person who runs this website can read them, with the website's own administrative credentials.",
    ],
    [
      "There is no analytics here, no advertising, and no tracking. This website sets no cookies.",
    ],
    ["Nothing is sold, and nothing is passed on to anybody."],
    [
      "Google hosts this website, and like any web host keeps ordinary records of the requests made to it. Those records are Google's and are covered by Google's own privacy policy.",
    ],
    [
      "You do not have to take any of this on trust. The code this website is built from is public, at ",
      {
        text: "github.com/Jared-Grace/love",
        url: "https://github.com/Jared-Grace/love",
      },
      ".",
    ],
    [
      "To have a message you sent deleted, or to ask anything about this, send a message from the ",
      {
        text: "message page",
        url: "https://jared-grace.web.app/message.html",
      },
      ". Send it from the same device you wrote the first one on, because the random number is the only thing tying the two together and it belongs to that browser.",
    ],
  ];
  return paragraphs;
}
