import { reply_choice } from "./reply_choice.mjs";
export function reply_word_he() {
  "The word he, with the old printing's hee. Written out because a word this short forgives no typing mistake.";
  let r = reply_choice(["he", "hee"]);
  return r;
}
