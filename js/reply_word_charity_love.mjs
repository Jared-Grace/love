import { reply_word_love } from "./reply_word_love.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_charity_love() {
  let r2 = reply_word_love();
  let r = reply_choice([r2, "charity"]);
  return r;
}
