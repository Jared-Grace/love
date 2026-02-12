import { equal } from "../../../love/public/src/equal.mjs";
import { text_remove_if_starts_with } from "../../../love/public/src/text_remove_if_starts_with.mjs";
export function text_remove_while_starts_with(item, prefix) {
  tsw;
  while (true) {
    let removed = text_remove_if_starts_with(item, prefix);
    ("was there no change?");
    if (equal(removed, item)) {
      break;
    }
    item = removed;
  }
  let result = item;
  return result;
}
