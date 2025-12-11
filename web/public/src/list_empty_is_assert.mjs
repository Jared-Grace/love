import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
export function list_empty_is_assert(list, json) {
  let e = list_empty_is(list);
  assert_json(e, json);
}
