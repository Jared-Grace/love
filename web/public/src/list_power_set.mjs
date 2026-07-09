import { list_power_set_inner } from "../../../love/public/src/list_power_set_inner.mjs";
export function list_power_set(list) {
  let index = 0;
  let results = [];
  let result = [];
  list_power_set_inner(list, index, result, results);
  return results;
}
