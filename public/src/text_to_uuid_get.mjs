import { text_to_uuid_read } from "../../../love/public/src/text_to_uuid_read.mjs";
import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function text_to_uuid_get(id) {
  let data = await text_to_uuid_read();
  let get = text_to_uuid_get_initialize(data);
  let text = object_property_get(get, id);
  return text;
}
