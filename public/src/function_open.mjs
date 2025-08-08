import { data_save } from "./data_save.mjs";
import { data_get } from "./data_get.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_open } from "./file_open.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function function_open(f_name) {
  const {f_path} = await function_name_to_path_unalias(f_name);
  await file_open(f_path);
  const property_name = "function_current";
  var d = await data_get(property_name, null);
  let { data } = d;
  object_property_set(data, property_name, f_name);
  await data_save(d);
}
