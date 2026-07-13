import { property_get } from "./property_get.mjs";
import { js_literal_is_assert_json } from "./js_literal_is_assert_json.mjs";
export function js_literal_value_get(literal) {
  function lambda() {
    let v = {
      hint: "expected a literal node to read its value",
    };
    return v;
  }
  js_literal_is_assert_json(literal, lambda);
  let value = property_get(literal, "value");
  return value;
}
