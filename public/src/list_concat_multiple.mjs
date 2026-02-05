import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_concat_multiple(lists) {
  let combined = [];
  function lambda(item) {
    combined = list_concat(combined, item);
  }
  each(lists, lambda);
  return combined;
}
