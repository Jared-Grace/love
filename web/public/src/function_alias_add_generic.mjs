import { data_get } from "./data_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_alias_add_generic(alias) {
  let unaliased = null;
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  const exists = object_property_exists(aliases, alias);
  if (exists) {
    unaliased = object_property_get(aliases, alias);
  }
  let v = {
    exists,
    aliases,
    file_path,
    data,
    unaliased,
  };
  return v;
}
