import { text_to_uuid_read_set } from "../../../love/public/src/text_to_uuid_read_set.mjs";
import { object_property_exists } from "../../../love/public/src/object_property_exists.mjs";
export async function text_to_uuid_set_exists(id) {
  let set = await text_to_uuid_read_set();
  let text = object_property_exists(set, id);
  return text;
}
