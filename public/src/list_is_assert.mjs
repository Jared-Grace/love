import { log } from "../../../love/public/src/log.mjs";
import { assert_json } from "../../../love/public/src/assert_json.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
export function list_is_assert(list) {
  let result = list_is(list);
  log(
    {result},);
  assert_json(result, {
    list,
  });
  return;
}
