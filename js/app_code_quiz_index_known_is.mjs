import { text_digits_is } from "./text_digits_is.mjs";
export function app_code_quiz_index_known_is(quiz_index) {
  "Whether a word standing where a place in the quiz goes in a link is written as a number at all.";
  "Only the shape is asked about, never how far in it points. Which question a lesson's quiz stops at depends on the lesson, and the lesson is another word in the same link that may itself be wrong - so a page that refused a number too large would be answering for a lesson it has not agreed on yet. A word that is not a number is wrong under every lesson there is, and that much can be said before anything is loaded.";
  let number_is = text_digits_is(quiz_index);
  return number_is;
}
