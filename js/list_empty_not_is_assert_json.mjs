import { assert_json } from "./assert_json.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_empty_not_is_assert_json(list, json) {
  let ne = list_empty_not_is(list);
  assert_json(ne, {
    list,
    json,
  });
}
