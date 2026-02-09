import { text_to_uuid_read_save } from "../../../love/public/src/text_to_uuid_read_save.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function text_to_uuid_save_get(id) {
  let get = await text_to_uuid_read_save();
  let text = object_property_get(get, id);
  return text;
}
