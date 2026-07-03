import { emoji_delete } from "../../../love/public/src/emoji_delete.mjs";
import { emoji_check } from "../../../love/public/src/emoji_check.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function boolean_to_text_validity(b) {
  let v = ternary(b, emoji_check() + " valid", emoji_delete() + " invalid");
  return v;
}
