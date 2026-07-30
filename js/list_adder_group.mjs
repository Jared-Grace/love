import { list_adder_group_start_add_end } from "./list_adder_group_start_add_end.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_adder_group(lambda$g) {
  function adder_groups(la) {
    let handed = list_adder_group_start_add_end(la);
    lambda$g(handed);
  }
  let groups = list_adder(adder_groups);
  return groups;
}
