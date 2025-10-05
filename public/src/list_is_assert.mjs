import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export function list_is_assert(list) {
  let result = list_is(list);
  let type = typeof list;
  assert_json_get(result, ()=>({
    type,
  }));
  return;
}
