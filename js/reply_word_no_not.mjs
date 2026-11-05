import { reply_choice } from "./reply_choice.mjs";
export function reply_word_no_not() {
  let r = reply_choice(["no", "not"]);
  return r;
}
