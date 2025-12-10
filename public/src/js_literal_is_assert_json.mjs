import { marker } from "../../../love/public/src/marker.mjs";
import { js_literal_is } from "../../../love/public/src/js_literal_is.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
export function js_literal_is_assert_json(node) {
  marker("1");
  let li = js_literal_is(node);
  assert_json_get(li);
}
