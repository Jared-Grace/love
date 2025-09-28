import { object_property_set } from "./object_property_set.mjs";
import { object_properties_delete } from "./object_properties_delete.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { marker } from "./marker.mjs";
export async function file_json_isolate(f_path, property_name) {
  marker("1");
  async function lambda(data) {
    let value = object_property_get(data, property_name);
    object_properties_delete(data);
    object_property_set(data, property_name, value);
  }
  await file_json_transform(f_path, lambda);
}
