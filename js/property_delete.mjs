import { property_exists_assert_json } from "./property_exists_assert_json.mjs";
export function property_delete(object, property_name) {
  property_exists_assert_json(object, property_name, {
    hint: "the property should exist before it can be deleted",
  });
  delete object[property_name];
}
