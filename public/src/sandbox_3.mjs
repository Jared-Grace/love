import { list_power_set } from "../../../love/public/src/list_power_set.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export async function sandbox_3() {
  let list = range_1(3);
  let r = list_power_set(list);
  return r;
}
