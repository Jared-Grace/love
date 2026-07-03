import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_join } from "../../../love/public/src/list_join.mjs";
export function list_join_cycled(list, list_separators) {
  function lambda(la) {}
  let list2 = list_adder(lambda);
  let joined = list_join(list, list_separators);
  return joined;
}
