import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { function_names_to_acronyms } from "./function_names_to_acronyms.mjs";
export function function_acronym_to_name(alias) {
  let unaliased = null;
  let acronyms = function_names_to_acronyms();
  const exists2 = object_property_exists(acronyms, alias);
  if (exists2) {
    let list = object_property_get(acronyms, alias);
    let s1 = list_size_1(list);
    if (s1) {
      unaliased = list_single(list);
    }
  }
  return unaliased;
}
