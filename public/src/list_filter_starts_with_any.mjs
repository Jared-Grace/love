import { marker } from "../../../love/public/src/marker.mjs";
import { list_any_starts_with } from "../../../love/public/src/list_any_starts_with.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function list_filter_starts_with_any(list, prefixes) {
  marker("1");
  function lambda(item) {
    let any = list_any_starts_with(item, prefixes);
    return any;
  }
  let verse_references = list_filter(list, lambda);
  return verse_references;
}
