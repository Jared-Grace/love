import { text_to_uuid_save_initialize } from "./text_to_uuid_save_initialize.mjs";
import { text_to_uuid_read } from "./text_to_uuid_read.mjs";
export async function text_to_uuid_read_save() {
  let data = await text_to_uuid_read();
  let save = text_to_uuid_save_initialize(data);
  return save;
}
