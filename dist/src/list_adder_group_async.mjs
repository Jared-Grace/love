import { add } from "../../../love/public/src/add.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
export async function list_adder_group_async(lambda) {
  async function adder_groups(la) {
    let group = null;
    await lambda({
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
  let groups = await list_adder_async(adder_groups);
  return groups;
}
