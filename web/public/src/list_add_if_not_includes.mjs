import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_add_if_not_includes(list, item) {
  "rename includes to exists todo";
  let exists = list_includes(list, item);
  if (not(exists)) {
    list_add(list, item);
  }
}
