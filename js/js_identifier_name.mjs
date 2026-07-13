import { property_get } from "./property_get.mjs";
import { js_identifier_is_assert_json } from "./js_identifier_is_assert_json.mjs";
export function js_identifier_name(i) {
  js_identifier_is_assert_json(i, {
    hint: "expected an identifier node to read its name",
  });
  let name = property_get(i, "name");
  return name;
}
