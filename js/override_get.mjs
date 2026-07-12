import { property_exists_if_get } from "./property_exists_if_get.mjs";
import { dictionary_functions_to_names } from "./dictionary_functions_to_names.mjs";
export function override_get(overrides_get, value) {
  let overrides = overrides_get();
  dictionary_functions_to_names(overrides);
  value = property_exists_if_get(overrides, value);
  return value;
}
