import { file_read } from "./file_read.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export async function function_alias_add(alias, f_name) {
  let data = await file_read("data.json");
  let alias=object_property_exists(data, "alias")
  if (object_property_exists(alias, alias)) {
    error();
  }
}
