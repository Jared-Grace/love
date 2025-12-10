import { json_to } from "../../../love/public/src/json_to.mjs";
import { assert_message_get } from "../../../love/public/src/assert_message_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function assert_json_get(b, lambda) {
  marker("1");
  function json_get() {
    let object = lambda();
    let json = json_to(object);
    return json;
  }
  let v = assert_message_get(b, json_get);
  return v;
}
