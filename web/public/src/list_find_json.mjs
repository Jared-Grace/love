import { equal_by_json_lambda } from "../../../love/public/src/equal_by_json_lambda.mjs";
import { list_find } from "../../../love/public/src/list_find.mjs";
export function list_find_json(list, expected) {
  let l = equal_by_json_lambda(expected);
  let found = list_find(list, l);
  return found;
}
