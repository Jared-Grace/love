import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export function list_adder_group(lambda$g) {
  function adder_groups(la) {
    let group = null;
    lambda$g({
      start,
      add,
      end,
    });
    function end() {
      la(group);
      start();
    }
    function start() {
      group = [];
    }
    function add(item) {
      list_add(group, item);
    }
  }
  let groups = list_adder(adder_groups);
  return groups;
}
