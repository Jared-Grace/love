import { object_property_get } from "./object_property_get.mjs";
import { function_names_to_acronyms } from "./function_names_to_acronyms.mjs";
export async function function_acronym_to_names(acronym) {
  let acronyms = await function_names_to_acronyms();
  let list = object_property_get(acronyms, acronym);
  return list;
}
