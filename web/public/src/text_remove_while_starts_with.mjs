import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { text_starts_with } from "../../../love/public/src/text_starts_with.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function text_remove_while_starts_with(item, prefix) {
  while (text_starts_with(item, prefix)) {
    let removed = text_prefix_without(item, prefix);
    ("was there no change?");
    if (equal(removed, item)) {
      break;
    }
    item = removed;
  }
  let result = item;
  return result;
}
