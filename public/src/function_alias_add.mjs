
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function function_alias_add(alias, f_name) {
    var { exists, aliases, file_path, data } = await function_alias_add_generic(alias);
  if (exists) {
    error();
  }
  object_property_set(aliases, alias, f_name);
  await file_overwrite_json(file_path,data)
}


async function function_alias_add_generic(alias) {
    const file_path = "data.json";
    let data = await file_read_json(file_path);
    let aliases = object_property_get(data, "aliases");
    const exists = object_property_exists(aliases, alias);
    return { exists, aliases, file_path, data };
}

