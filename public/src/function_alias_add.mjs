import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function function_alias_add(alias, f_name) {
  let json = await file_read("data.json");
  let data = json_from(json);
  let d_alias = object_property_get(data, "alias");
  if (object_property_exists(d_alias, alias)) {
    error();
  }
  object_property_set(d_alias, alias, f_name);
}
