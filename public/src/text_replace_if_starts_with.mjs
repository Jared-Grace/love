import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
export function text_replace_if_starts_with(prefix, item, replacement) {
  let sw = text_starts_with(item, prefix);
  if (sw) {
    item = text_replace(item, prefix, replacement);
  }
  return item;
}
