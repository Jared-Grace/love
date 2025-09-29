import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export function list_is_assert(list) {
  let result = list_is(list);
  assert_json(result, {
    list,
  });
}
