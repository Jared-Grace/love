import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
export function reply_word_hello() {
  let fn = reply_optional("o");
  const hello = reply_sequence(["hell", fn]);
  return hello;
}
