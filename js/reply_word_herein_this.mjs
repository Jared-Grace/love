import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_herein_this() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r = reply_choice(["herein", "this"]);
  return r;
}
