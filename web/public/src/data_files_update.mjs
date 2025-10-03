import { data_generate } from "../../../love/public/src/data_generate.mjs";
import { object_properties_delete } from "../../../love/public/src/object_properties_delete.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_save } from "../../../love/public/src/data_save.mjs";
import { data_all } from "../../../love/public/src/data_all.mjs";
export async function data_files_update() {
  return;
  marker("1");
  let d_path = data_path();
  var d = await data_all(d_path);
  let { data } = d;
  let properties = ["identifiers", "functions"];
  object_properties_delete(data, properties);
  await data_generate(data);
  await data_save(d);
}
