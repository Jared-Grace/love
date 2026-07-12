import { text_to_uuid_read_save } from "./text_to_uuid_read_save.mjs";
import { property_exists } from "./property_exists.mjs";
export async function text_to_uuid_ids_exists(id) {
  let get = await text_to_uuid_read_save();
  let text = property_exists(get, id);
  return text;
}
