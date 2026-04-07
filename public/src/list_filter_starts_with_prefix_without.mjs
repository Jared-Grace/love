import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
export function list_filter_starts_with_prefix_without(lines, combined) {
  let filtered = list_filter_starts_with(lines, combined);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  let without = text_prefix_without(found, combined);
  return without;
}
