import { list_adder_group } from "../../../love/public/src/list_adder_group.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function list_split(filtered, separator) {
  function lambda2(g) {
    g.start();
    function lambda(item) {
      if (item === separator) {
        g.end();
      } else {
        g.add(item);
      }
    }
    each(filtered, lambda);
    g.end();
  }
  let groups = list_adder_group(lambda2);
  return groups;
}
