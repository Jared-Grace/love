import { file_read_json_initialize } from "./file_read_json_initialize.mjs";
import { text_to_uuid_initial } from "./text_to_uuid_initial.mjs";
import { text_to_uuid_path } from "./text_to_uuid_path.mjs";
export async function text_to_uuid_read() {
  let joined = text_to_uuid_path();
  let initial = text_to_uuid_initial();
  let data = await file_read_json_initialize(joined, initial);
  return data;
}
