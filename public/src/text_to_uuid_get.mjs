import { file_write_json_if_exists_not } from "../../../love/public/src/file_write_json_if_exists_not.mjs";
import { text_to_uuid_initial } from "../../../love/public/src/text_to_uuid_initial.mjs";
import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_to_uuid_path } from "../../../love/public/src/text_to_uuid_path.mjs";
export async function text_to_uuid_get(id) {
  let joined = text_to_uuid_path();
  let initial = text_to_uuid_initial();
  await file_write_json_if_exists_not(f_path, initial);
  let data = await file_json_read(joined);
  let get = text_to_uuid_get_initialize(data);
  let text = object_property_get(get, id);
  return text;
}
