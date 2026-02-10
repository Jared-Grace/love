import { properties_delete_if_exists } from "../../../love/public/src/properties_delete_if_exists.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
export async function data_files_update() {
  return;
  let d_path = data_path();
  var d = await data_all(d_path);
  let data = object_property_get(d, "data");
  let properties = ["identifiers", "functions"];
  properties_delete_if_exists(data, properties);
  await data_generate(data);
  await data_save(d);
}
