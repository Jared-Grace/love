import { object_properties_get } from "../../../love/public/src/object_properties_get.mjs";
import { text_to_uuid_read } from "../../../love/public/src/text_to_uuid_read.mjs";
import { text_to_uuid_ids_initialize } from "../../../love/public/src/text_to_uuid_ids_initialize.mjs";
export async function text_to_uuid_list() {
  let data = await text_to_uuid_read();
  let get = text_to_uuid_ids_initialize(data);
  let ids = object_properties_get(get);
  return ids;
}
