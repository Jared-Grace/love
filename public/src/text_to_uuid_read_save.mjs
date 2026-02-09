import { text_to_uuid_set_initialize } from "../../../love/public/src/text_to_uuid_set_initialize.mjs";
import { text_to_uuid_read } from "../../../love/public/src/text_to_uuid_read.mjs";
export async function text_to_uuid_read_save() {
  let data = await text_to_uuid_read();
  let set = text_to_uuid_set_initialize(data);
  return set;
}
