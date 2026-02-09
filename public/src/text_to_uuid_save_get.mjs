import { text_to_uuid_read_get } from "../../../love/public/src/text_to_uuid_read_get.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function text_to_uuid_save_get(id) {
  let save = await text_to_uuid_read_get();
  let text = object_property_get(save, id);
  return text;
}
