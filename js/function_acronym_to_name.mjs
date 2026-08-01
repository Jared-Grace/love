import { function_name_acronym_possible_is } from "./function_name_acronym_possible_is.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { function_names_to_acronyms } from "./function_names_to_acronyms.mjs";
export async function function_acronym_to_name(alias) {
  "The map is only asked for a name that could be an acronym at all. Every other name is a guaranteed miss, and reaching the map to hear it reads every function file in every repo - about 0.6 seconds, spent twice on every open, for an answer known from the name's own spelling.";
  let expanded = null;
  let expandeds = [];
  let possible = function_name_acronym_possible_is(alias);
  if (possible) {
    let acronyms = await function_names_to_acronyms();
    let exists = property_exists(acronyms, alias);
    if (exists) {
      expandeds = property_get(acronyms, alias);
      let s = list_size_1(expandeds);
      if (s) {
        expanded = list_single(expandeds);
      }
    }
  }
  let v = {
    expanded,
    expandeds,
  };
  return v;
}
