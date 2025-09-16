import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_any(prefixes, list) {
  let verse_references = list_filter(list, (item = {}));
  return verse_references;
}
