import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_word_son() {
  let ending = reply_optional("ne");
  let r = reply_sequence(["son", ending]);
  return r;
}
