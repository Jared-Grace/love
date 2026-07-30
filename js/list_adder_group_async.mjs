import { list_adder_group_start_add_end } from "./list_adder_group_start_add_end.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function list_adder_group_async(lambda) {
  async function adder_groups(la) {
    let handed = list_adder_group_start_add_end(la);
    await lambda(handed);
  }
  let groups = await list_adder_async(adder_groups);
  return groups;
}
