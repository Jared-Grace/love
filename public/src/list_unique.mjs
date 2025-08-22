import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_unique(list) {
  let unique = [];
  function lambda(item) {
    let a = list_includes(unique, item);
    if (not(a)) {
      list_add(unique, item);
    }
  }
  each(list, lambda);
  return unique;
}
