import { emoji_no } from "./emoji_no.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { ternary } from "./ternary.mjs";
import { text_combine } from "./text_combine.mjs";
export function boolean_to_text_validity(b) {
  let validity = ternary(
    b,
    text_combine(emoji_check(), " valid"),
    text_combine(emoji_no(), " invalid"),
  );
  return validity;
}
