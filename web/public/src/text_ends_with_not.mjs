import { not } from "../../../love/public/src/not.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
export function text_ends_with_not(item, suffix) {
  let a = text_ends_with(item, suffix);
  let ewn = not(a);
  return ewn;
}
