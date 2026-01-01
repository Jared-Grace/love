import { set_includes_not } from "../../../love/public/src/set_includes_not.mjs";
import { set_add } from "../../../love/public/src/set_add.mjs";
import { set_new } from "../../../love/public/src/set_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_unique(list) {
  marker("1");
  let found = set_new();
  let unique = [];
  function lambda(item) {
    const b = set_includes_not(found, item);
    if (b) {
      set_add(found, item);
      list_add(unique, item);
    }
  }
  each(list, lambda);
  return unique;
}
