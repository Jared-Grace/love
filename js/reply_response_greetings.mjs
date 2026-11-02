import { reply_words_greetings } from "./reply_words_greetings.mjs";
import { reply_response_dressed } from "./reply_response_dressed.mjs";
export function reply_response_greetings() {
  let words = reply_words_greetings();
  let greetings = reply_response_dressed(words);
  return greetings;
}
