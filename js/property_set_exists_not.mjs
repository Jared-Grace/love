import { property_set } from "./property_set.mjs";
import { property_exists_not_assert_json } from "./property_exists_not_assert_json.mjs";
export function property_set_exists_not(object, property_name, value) {
  property_exists_not_assert_json(object, property_name, {
    hint: "this property should not already exist before setting it fresh — was it already set?",
  });
  property_set(object, property_name, value);
}
