import { reply_word_son } from "./reply_word_son.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_phrase_his_son() {
  let r3 = reply_word_son();
  let r = reply_sequence(["his", r3]);
  return r;
}
