import { list_to_dictionary_from_object } from "./list_to_dictionary_from_object.mjs";
import { list_unique_is_assert_json } from "./list_unique_is_assert_json.mjs";
export function object_pick(object, property_names) {
  list_unique_is_assert_json(property_names, {
    hint: "the property names to pick should be unique — is there a duplicate key?",
  });
  let picked = list_to_dictionary_from_object(property_names, object);
  return picked;
}
