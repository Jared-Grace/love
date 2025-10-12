import { function_name_to_acronym } from "../../../love/public/src/function_name_to_acronym.mjs";
import { function_alias_add } from "../../../love/public/src/function_alias_add.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_alias_add_auto(f_name) {
  marker("1");
  let acronym = function_name_to_acronym(f_name);
  let v = await function_alias_add(acronym, f_name);
  return v;
}
