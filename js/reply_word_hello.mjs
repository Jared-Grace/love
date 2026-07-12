import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
export function reply_word_hello() {
  let fn = reply_optional("o");
  let hello = reply_sequence(["hell", fn]);
  return hello;
}
