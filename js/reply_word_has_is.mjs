import { reply_choice } from "./reply_choice.mjs";
export function reply_word_has_is() {
  let r = reply_choice(["has", "is"]);
  return r;
}
