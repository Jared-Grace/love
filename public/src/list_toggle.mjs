import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_toggle(chosen, item) {
  let includes2 = list_includes(chosen, item);
  if (includes2) {
    list_remove(chosen, item);
  } else {
    list_add(chosen, item);
  }
}
