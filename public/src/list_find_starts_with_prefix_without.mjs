import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { list_find_starts_with } from "../../../love/public/src/list_find_starts_with.mjs";
export function list_find_starts_with_prefix_without(lines, prefix) {
  let found = list_find_starts_with(lines, prefix);
  let without = text_prefix_without(found, prefix);
  return without;
}
