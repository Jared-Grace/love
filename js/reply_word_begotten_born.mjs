import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_begotten_born() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r = reply_choice(["begotten", "born"]);
  return r;
}
