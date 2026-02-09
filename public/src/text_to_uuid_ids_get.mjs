import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_to_uuid_read_get } from "../../../love/public/src/text_to_uuid_read_get.mjs";
export async function text_to_uuid_ids_get(id) {
  let get = await text_to_uuid_read_get();
  let text = object_property_get(get, id);
  return text;
}
