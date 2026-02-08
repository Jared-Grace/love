import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function text_replace_if_starts_with(prefix, item, replacement) {
  let sw = string_starts_with(item, prefix);
  if (sw) {
    item = text_replace(item, prefix, replacement);
  }
  return item;
}
