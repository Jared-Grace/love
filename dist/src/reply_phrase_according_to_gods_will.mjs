import { reply_word_to } from "../../../love/public/src/reply_word_to.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { reply_sequence_optional } from "../../../love/public/src/reply_sequence_optional.mjs";
export function reply_phrase_according_to_gods_will() {
  let v = reply_word_to();
  let o_according_to = reply_sequence_optional(["according", v]);
  let according_to_gods_will = reply_sequence([
    o_according_to,
    "god's",
    "will",
  ]);
  return according_to_gods_will;
}
