import { reply_choice } from "./reply_choice.mjs";
export function reply_word_may_should() {
  let r = reply_choice(["may", "should"]);
  return r;
}
