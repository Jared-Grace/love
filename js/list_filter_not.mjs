import { fn_name } from "./fn_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
export function list_filter_not(list, lambda$item) {
  ("the items a test says NO to - the other half of what ",
    fn_name("list_filter"),
    " hands back.");
  ("the whole ",
    fn_name("list_filter"),
    " family already spells a negated test this way (",
    fn_name("list_filter_property_not"),
    ", ",
    fn_name("list_filter_starts_with_not"),
    "), and the general one was the member missing: every caller wanting it wrote a one-line wrapper around its own predicate that only turned the answer over.");
  function lambda(item) {
    let match = lambda$item(item);
    let r = not(match);
    return r;
  }
  let filtered = list_filter(list, lambda);
  return filtered;
}
