import { assert_json } from "./assert_json.mjs";
import { list_multiple_is } from "./list_multiple_is.mjs";
export function list_multiple_is_assert_json(list, json) {
  let m = list_multiple_is(list);
  assert_json(m, {
    list,
    json,
  });
}
