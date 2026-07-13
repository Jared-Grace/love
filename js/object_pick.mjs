import { list_unique_is_assert_json } from "./list_unique_is_assert_json.mjs";
import { list_to_dictionary_value } from "./list_to_dictionary_value.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
export function object_pick(object, property_names) {
  list_unique_is_assert_json(property_names, {
    hint: "the property names to pick should be unique — is there a duplicate key?",
  });
  let c = property_get_curried(object);
  let picked = list_to_dictionary_value(property_names, c);
  return picked;
}
