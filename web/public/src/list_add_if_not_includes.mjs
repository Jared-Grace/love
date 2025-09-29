import { not } from "../../../love/public/src/not.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_add_if_not_includes(list, item) {
  "rename includes to exists todo";
  let exists = list_includes(list, item);
  if (not(exists)) {
    list_add(list, item);
  }
}
