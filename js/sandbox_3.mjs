import { list_power_set } from "./list_power_set.mjs";
import { range_1 } from "./range_1.mjs";
export async function sandbox_3() {
  let list = range_1(3);
  let r = list_power_set(list);
  return r;
}
