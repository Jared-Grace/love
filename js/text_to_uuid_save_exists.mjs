import { text_to_uuid_read_save } from "./text_to_uuid_read_save.mjs";
import { property_exists } from "./property_exists.mjs";
export async function text_to_uuid_save_exists(text) {
  let set = await text_to_uuid_read_save();
  let e = property_exists(set, text);
  return e;
}
