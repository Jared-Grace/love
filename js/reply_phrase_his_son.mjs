import { fn_name } from "./fn_name.mjs";
import { reply_words } from "./reply_words.mjs";
import { reply_word_son } from "./reply_word_son.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_his_son() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r2 = reply_words("his");
  let r3 = reply_word_son();
  let r = reply_sequence([r2, r3]);
  return r;
}
