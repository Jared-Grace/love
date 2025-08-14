import { object_property_get } from "./object_property_get.mjs";
import { function_names_to_acronyms } from "./function_names_to_acronyms.mjs";
export function function_acronym_to_names(acronym) {
  let acronyms = function_names_to_acronyms();
  let a = object_property_get(acronyms, "a");
}
