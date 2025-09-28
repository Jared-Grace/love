import { object_property_delete } from "./object_property_delete.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { marker } from "./marker.mjs";
export async function file_json_property_delete() {
  marker("1");
  async function lambda(data) {
    object_property_delete(object, property_name);
  }
  await file_json_transform(fb_path, lambda);
}
