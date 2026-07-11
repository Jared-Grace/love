import { list_power_set } from "../../../love/public/src/list_power_set.mjs";
import { range_ } from "../../../love/public/src/range_1.mjs";
export async function sandbox_() {
  let list = range_(3);
  let r = list_power_set(list);
  return r;
}
