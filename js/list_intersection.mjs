import { list_filter } from "./list_filter.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_intersection(left, right) {
  "The items in both lists, in the order the first one had them.";
  function lambda(item) {
    let both = list_includes(right, item);
    return both;
  }
  let shared = list_filter(left, lambda);
  return shared;
}
