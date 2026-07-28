import { list_adder } from "./list_adder.mjs";
import { list_add } from "./list_add.mjs";
export function list_adder_group(lambda$g) {
  function adder_groups(la) {
    let group = null;
    lambda$g({
      start,
      add: add_item,
      end,
    });
    function end() {
      la(group);
      start();
    }
    function start() {
      group = [];
    }
    function add_item(item) {
      list_add(group, item);
    }
  }
  let groups = list_adder(adder_groups);
  return groups;
}
