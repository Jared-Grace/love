import { properties_get } from "./properties_get.mjs";
import { text_to_uuid_read } from "./text_to_uuid_read.mjs";
import { text_to_uuid_ids_initialize } from "./text_to_uuid_ids_initialize.mjs";
export async function text_to_uuid_list() {
  let data = await text_to_uuid_read();
  let get = text_to_uuid_ids_initialize(data);
  let ids = properties_get(get);
  return ids;
}
