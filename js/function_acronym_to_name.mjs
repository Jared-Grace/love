import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_1 } from "../../../love/public/src/list_size_1.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { function_names_to_acronyms } from "../../../love/public/src/function_names_to_acronyms.mjs";
export async function function_acronym_to_name(alias) {
  let expanded = null;
  let expandeds = null;
  let acronyms = await function_names_to_acronyms();
  const exists2 = object_property_exists(acronyms, alias);
  if (exists2) {
    expandeds = object_property_get(acronyms, alias);
    let s1 = list_size_1(expandeds);
    if (s1) {
      expanded = list_single(expandeds);
    }
  }
  let v = {
    expanded,
    expandeds,
  };
  return v;
}
