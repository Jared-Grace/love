import { function_alias_generic } from "./function_alias_generic.mjs";
import { error } from "./error.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { function_alias_add_generic } from "./function_alias_add_generic.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function function_aliases() {
  let a = await function_alias_add_generic("");
  let { aliases } = a;
  return aliases;
}
