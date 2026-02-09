import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
import { text_to_uuid_read } from "../../../love/public/src/text_to_uuid_read.mjs";
export async function text_to_uuid_read_get() {
  let data = await text_to_uuid_read();
  let get = text_to_uuid_get_initialize(data);
  return get;
}
