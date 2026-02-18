import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
import { text_lower_to } from "../../../love/public/src/text_lower_to.mjs";
export function text_replace_space_underscore_lower(t) {
  let lower = text_lower_to(t);
  let rl = text_replace_space_underscore(lower);
  return rl;
}
