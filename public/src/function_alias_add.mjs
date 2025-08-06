
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function function_alias_add(alias, f_name) {
    const file_path = "data.json";
  let data = await file_read_json(file_path);
  let d_alias = object_property_get(data, "alias");
  if (object_property_exists(d_alias, alias)) {
    error();
  }
  object_property_set(d_alias, alias, f_name);
  await file_overwrite_json(file_path,data)
}


