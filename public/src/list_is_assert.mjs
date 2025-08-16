import { assert_json } from "./assert_json.mjs";
import { assert_message } from "./assert_message.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
import { json_to } from "./json_to.mjs";
export function list_is_assert(list) {
  let result = list_is(list);
  assert_json(result,{list});
  return;
}
