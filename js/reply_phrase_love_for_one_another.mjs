import { fn_name } from "./fn_name.mjs";
import { reply_word_love } from "./reply_word_love.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_love_for_one_another() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r2 = reply_word_love();
  let fn = reply_optional("for");
  let r3 = reply_words("one another");
  let r = reply_sequence([r2, fn, r3]);
  return r;
}
