import { list_filter } from "./list_filter.mjs";
import { list_any } from "./list_any.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function list_filter_starts_with_any(mapped, split) {
  function lambda(item) {
    function lambda2(item2) {
      let sw = string_starts_with(item, item2);
      return sw;
    }
    let any = list_any(mapped, lambda2);
    return any;
  }
  let verse_references = list_filter(split, lambda);
  return verse_references;
}
