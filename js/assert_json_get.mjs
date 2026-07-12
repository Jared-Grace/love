import { json_to } from "./json_to.mjs";
import { assert_message_get } from "./assert_message_get.mjs";
export function assert_json_get(b, lambda) {
  function json_get() {
    let object = lambda();
    let json = json_to(object);
    return json;
  }
  assert_message_get(b, json_get);
}
