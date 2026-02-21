import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { list_any } from "../../../love/public/src/list_any.mjs";
import { text_ends_with } from "../../../love/public/src/text_ends_with.mjs";
export function list_filter_ends_with_any(list, suffixes) {
  function lambda(item) {
    function lambda3(suffix) {
      let ew = text_ends_with(item, suffix);
      return ew;
    }
    let any = list_any(suffixes, lambda3);
    return any;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
