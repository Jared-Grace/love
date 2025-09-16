import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_any(prefixes, list) {
  let verse_references = list_filter(list, list_any_starts_with);
  return verse_references;
}
