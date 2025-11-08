import { string_replace } from "../../../love/public/src/string_replace.mjs";
import { string_starts_with } from "../../../love/public/src/string_starts_with.mjs";
export function string_replace_if_starts_with(prefix, item, replacement) {
  let sw = string_starts_with(item, prefix);
  if (sw) {
    item = string_replace(item, prefix, replacement);
  }
  return item;
}
