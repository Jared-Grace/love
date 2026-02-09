import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
import { text_to_uuid_read } from "../../../love/public/src/text_to_uuid_read.mjs";
import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
export async function text_to_uuid_exists(id) {
  let data = await text_to_uuid_read();
  let get = text_to_uuid_get_initialize(data);
  let text = object_property_exists(get, id);
  return text;
}
