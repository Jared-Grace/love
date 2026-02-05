import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
export async function function_aliases() {
  let v = await function_alias_add_generic("");
  let aliases = object_property_get(v, "aliases");
  return aliases;
}
