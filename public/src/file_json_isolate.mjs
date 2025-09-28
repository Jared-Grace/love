import { object_properties_delete } from "./object_properties_delete.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { each } from "./each.mjs";
import { object_properties } from "./object_properties.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { marker } from "./marker.mjs";
export async function file_json_isolate(f_path, property_name) {
  marker("1");
  async function lambda(data) {
    let value = object_property_get(data, property_name);
    object_properties_delete(obj);
    let properties = object_properties(data);
    each(properties, object_property_delete);
  }
  await file_json_transform(fb_path, lambda);
}
