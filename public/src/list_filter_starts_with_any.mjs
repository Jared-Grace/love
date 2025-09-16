import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
export function list_filter_starts_with_any(prefixes, list) {
  function lambda(item) {
    let any = list_any_starts_with(item2, prefixes2);
  }
  let verse_references = list_filter(list, lambda);
  return verse_references;
}
