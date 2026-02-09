import { text_to_uuid_read_set } from "../../../love/public/src/text_to_uuid_read_set.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export async function text_to_uuid_get_exists(id) {
  let get = await text_to_uuid_read_set();
  let text = object_property_exists(get, id);
  return text;
}
