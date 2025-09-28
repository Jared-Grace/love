import { file_json_isolate } from "./file_json_isolate.mjs";
import { data_copy } from "./data_copy.mjs";
import { marker } from "./marker.mjs";
export async function data_partition(property_name) {
  marker("1");
  let f_path_to = await data_copy(property_name);
  await file_json_isolate(f_path_to, property_name);
}
