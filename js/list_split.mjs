import { equal } from "./equal.mjs";
import { list_adder_group } from "./list_adder_group.mjs";
import { each } from "./each.mjs";
export function list_split(list, separator_item) {
  function lambda2(g) {
    g.start();
    function lambda(item) {
      if (equal(item, separator_item)) {
        g.end();
      } else {
        g.add(item);
      }
    }
    each(list, lambda);
    g.end();
  }
  let groups = list_adder_group(lambda2);
  return groups;
}
