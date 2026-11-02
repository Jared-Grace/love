import { arguments_assert } from "./arguments_assert.mjs";
import { reply_words_greetings } from "./reply_words_greetings.mjs";
import { reply_response_dressed } from "./reply_response_dressed.mjs";
export function reply_response_greetings_friend() {
  arguments_assert(arguments, 0);
  ("The plain greeting with one more sentence, for somebody who greets as a friend.");
  let greetings = reply_words_greetings();
  let words = greetings + " Any friend of Jesus is a friend of mine!";
  let dressed = reply_response_dressed(words);
  return dressed;
}
