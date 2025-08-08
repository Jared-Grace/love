import { data_get } from "./data_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
export async function function_alias_add_generic(alias) {
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  const exists = object_property_exists(aliases, alias);
  let unaliased = null;
  if (exists) {
    unaliased = object_property_get(aliases, alias);
  }
  return {
    exists,
    aliases,
    file_path,
    data,
    unaliased,
  };
}
