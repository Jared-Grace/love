import { each } from "./each.mjs";
import { list_add } from "./list_add.mjs";

export function list_unique(list) {
  let unique = [];
  each(list, (item) => {
    if (!list_includes(unique, item)) {
      list_add(unique, item);
    }
  });
}
