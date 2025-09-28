import { file_json_transform } from "./file_json_transform.mjs";
import { marker } from "./marker.mjs";
export async function file_json_property_delete() {
  marker("1");
  await file_json_transform(fb_path, async function lambda(data) {});
}
