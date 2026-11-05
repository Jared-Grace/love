import { list_map } from "./list_map.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_phrases(phrases) {
  "One of several whole phrases. Each stays whole, so a message cannot pass by mixing words from two of them inside one phrase.";
  let read = list_map(phrases, reply_words);
  let r = reply_choice(read);
  return r;
}
