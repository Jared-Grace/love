import { text_to_uuid_read_save } from "../../../love/public/src/text_to_uuid_read_save.mjs";
import { property_exists } from "../../../love/public/src/property_exists.mjs";
export async function text_to_uuid_save_exists(text) {
  let set = await text_to_uuid_read_save();
  let e = property_exists(set, text);
  return e;
}
