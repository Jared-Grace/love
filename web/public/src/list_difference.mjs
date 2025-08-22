import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_difference(list, other) {
  return list_adder((la) => {
    each(list, (l) => {
      if (!list_includes(other, l)) {
        la(l);
      }
    });
  });
}
