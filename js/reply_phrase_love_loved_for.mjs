import { fn_name } from "./fn_name.mjs";
import { reply_word_love_loved } from "./reply_word_love_loved.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_love_loved_for() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r2 = reply_word_love_loved();
  let fn = reply_optional("for");
  let r = reply_sequence([r2, fn]);
  return r;
}
