import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_to_uuid_read_save } from "../../../love/public/src/text_to_uuid_read_save.mjs";
export async function text_to_uuid_save_get(text) {
  let get = await text_to_uuid_read_save();
  let i = object_property_get(get, text);
  return i;
}
