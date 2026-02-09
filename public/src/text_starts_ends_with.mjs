import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_starts_ends_with(t, prefix, suffix) {
  let sw = text_starts_with(t, prefix);
  let ew = text_ends_with(item, suffix);
  let r = sw && ew;
  return r;
}
