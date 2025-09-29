import { assert_message } from "../../../love/public/src/assert_message.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
export function assert_json(b, o) {
  let message = json_to(o);
  assert_message(b, message);
}
