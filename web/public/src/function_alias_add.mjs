import { file_read } from "./file_read.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_alias_add(alias, f_name) {
  let data = await file_read("data.json");
  let d_alias=object_property_get(data, "alias")
  if (object_property_exists(d_alias, alias)) {
    error();
  }
}
