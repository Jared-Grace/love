import { marker } from "../../../love/public/src/marker.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_unique(list) {
  marker("1");
  let unique = [];
  function lambda(item) {
    let a = list_includes(unique, item);
    if (not(a)) {
      list_add(unique, item);
    }
  }
  each(list, lambda);
  return unique;
  let found = new Set();
}
