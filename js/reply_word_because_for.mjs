import { fn_name } from "./fn_name.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_word_because_for() {
  ("Made by ", fn_name("reply_bible_verse_function_new"), ".");
  let r = reply_choice(["because", "for"]);
  return r;
}
