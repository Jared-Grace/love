import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
import { object_properties } from "./object_properties.mjs";
export async function function_aliases_search(search) {
  let names_to_aliases= await function_aliases_inverted();
let names=object_properties(names_to_aliases)
  let names_search = search_generic(search, names);
}
