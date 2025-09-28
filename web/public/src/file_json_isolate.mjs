import { object_property_get } from "./object_property_get.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { marker } from "./marker.mjs";
export async function file_json_isolate(f_path, property_name) {
  marker("1");
  async function lambda(data) {
    let value = object_property_get(object, property_name2);
  }
  await file_json_transform(fb_path, lambda);
}
