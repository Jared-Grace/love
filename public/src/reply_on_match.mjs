import { list_filter } from "../../../love/public/src/list_filter.mjs";
export function reply_on_match(fn, on_match) {
  let matcher = function reply_on_match_inner(possbilities) {
    possbilities = fn(possbilities);
    function lambda(item) {}
    let filtered = list_filter(list, lambda);
    if (matches) {
      on_match(possbilities);
    }
    return matches;
  };
  return matcher;
}
