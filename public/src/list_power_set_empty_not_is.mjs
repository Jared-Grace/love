import { list_filter_list_empty_not_is } from "../../../love/public/src/list_filter_list_empty_not_is.mjs";
import { list_power_set } from "../../../love/public/src/list_power_set.mjs";
export function list_power_set_empty_not_is(symbols_required) {
  let results = list_power_set(symbols_required);
  let filtered = list_filter_list_empty_not_is(results);
  return filtered;
}
