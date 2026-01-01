import { set_new } from "../../../love/public/src/set_new.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { set_includes } from "../../../love/public/src/set_includes.mjs";
export function list_unique(list) {
  marker("1");
  let found = set_new();
  let unique = [];
  function lambda(item) {
    let a = set_includes(found, item);
    if (not(a)) {found.add(a)
      list_add(unique, item);
    }
  }
  each(list, lambda);

  return unique;
}

