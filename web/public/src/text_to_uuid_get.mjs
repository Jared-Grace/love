import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_to_uuid_path } from "../../../love/public/src/text_to_uuid_path.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
export async function text_to_uuid_get(id) {
  let joined = text_to_uuid_path();
  let data = await file_json_read(joined);
  let get = object_property_initialize(data, "get", {});
  let text = object_property_get(get, id);
}
