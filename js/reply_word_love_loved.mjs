import { fn_name } from "./fn_name.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_word_u_v } from "./reply_word_u_v.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_love_loved() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r2 = reply_word_love();
  let r3 = reply_word_u_v("loved");
  let r = reply_choice([r2, r3]);
  return r;
}
