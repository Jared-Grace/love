import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function list_empty_is_assert_json(list, json) {
  let e = list_empty_is(list);
  assert_json(e, {
    list,
    json,
  });
}
