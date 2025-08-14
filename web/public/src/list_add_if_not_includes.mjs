import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_add_if_not_includes(found, node) {
  "rename includes to exists todo";
  let includes = list_includes(found, node);
  if (!includes) {
    list_add(found, node);
  }
}
