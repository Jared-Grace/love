import { assert_json } from "./assert_json.mjs";
import { list_is } from "./list_is.mjs";
export function list_is_assert(list) {
  let result = list_is(list);
  assert_json(result, {
    list,
  });
}
