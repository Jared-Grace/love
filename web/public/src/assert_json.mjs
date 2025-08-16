import {assert_message} from "./assert_message.mjs";
import {json_to} from "./json_to.mjs";
export function assert_json(o) {
  let message = json_to(o);
  assert_message(b, message);
}
