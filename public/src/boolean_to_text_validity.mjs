import { emoji_no } from "../../../love/public/src/emoji_no.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function boolean_to_text_validity(b) {
  let v = ternary(b, emoji_check() + " valid", emoji_no() + " invalid");
  return v;
}
