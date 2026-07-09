import { emoji_no } from "../../../love/public/src/emoji_no.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function boolean_to_text_validity(b) {
  let validity = ternary(
    b,
    text_combine(emoji_check(), " valid"),
    text_combine(emoji_no(), " invalid"),
  );
  return validity;
}
