import { emoji_books } from "./emoji_books.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_bible_licences_text() {
  "What the way into the credits is called - said as what the reader will find rather than as the word licences, which is the name of the paperwork and not of the people.";
  let left = emoji_books();
  let text = text_combine(left, " The bibles here, and who gave them");
  return text;
}
