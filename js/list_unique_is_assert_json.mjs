import { assert_json } from "./assert_json.mjs";
import { list_unique_is } from "./list_unique_is.mjs";
export function list_unique_is_assert_json(list, json) {
  let u = list_unique_is(list);
  assert_json(u, {
    list,
    json,
  });
}
