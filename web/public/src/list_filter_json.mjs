import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { equal_by_json_lambda } from "../../../love/public/src/equal_by_json_lambda.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function list_filter_json(list, expected) {
  let l = equal_by_json_lambda(expected);
  let filtered = list_filter(list, l);
  return filtered;
}
