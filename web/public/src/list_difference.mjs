import { each } from "./each.mjs";
import { list_includes } from "./list_includes.mjs";

export function list_difference(list, other) {
  each(list, (l) => {
    if (!list_includes(other, l)) {
    }
  });
}
