import { property_get } from "./property_get.mjs";
import { text_to_uuid_read_save } from "./text_to_uuid_read_save.mjs";
export async function text_to_uuid_save_get(text) {
  let get = await text_to_uuid_read_save();
  let id = property_get(get, text);
  return id;
}
