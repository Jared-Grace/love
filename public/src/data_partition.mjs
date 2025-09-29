import { data_path } from "../../../love/public/src/data_path.mjs";
import { file_json_property_delete } from "../../../love/public/src/file_json_property_delete.mjs";
import { file_json_isolate } from "../../../love/public/src/file_json_isolate.mjs";
import { data_copy } from "../../../love/public/src/data_copy.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_partition(property_name) {
  marker("1");
  let f_path_to = await data_copy(property_name);
  await file_json_isolate(f_path_to, property_name);
  let f_path_from = data_path();
  await file_json_property_delete(f_path_from, property_name);
}
