import { file_read_json_initialize } from "../../../love/public/src/file_read_json_initialize.mjs";
import { text_to_uuid_initial } from "../../../love/public/src/text_to_uuid_initial.mjs";
import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { text_to_uuid_path } from "../../../love/public/src/text_to_uuid_path.mjs";
export async function text_to_uuid_list(id) {
  let joined = text_to_uuid_path();
  let initial = text_to_uuid_initial();
  let data = await file_read_json_initialize(joined, initial);
  let get = text_to_uuid_get_initialize(data);
  let text = object_property_get(get, id);
  return text;
}
