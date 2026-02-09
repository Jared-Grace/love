import { text_to_uuid_set_initialize } from "../../../love/public/src/text_to_uuid_set_initialize.mjs";
import { text_to_uuid_initial } from "../../../love/public/src/text_to_uuid_initial.mjs";
import { text_to_uuid_get_initialize } from "../../../love/public/src/text_to_uuid_get_initialize.mjs";
import { text_to_uuid_path } from "../../../love/public/src/text_to_uuid_path.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { file_json_transform_initialize } from "../../../love/public/src/file_json_transform_initialize.mjs";
export async function text_to_uuid_set(text) {
  let joined = text_to_uuid_path();
  let initial = text_to_uuid_initial();
  await file_json_transform_initialize(joined, initial, lambda);
  async function lambda(data) {
    let set = text_to_uuid_set_initialize(data);
    object_property_exists_not_assert(set, text);
    let get = text_to_uuid_get_initialize(data);
    let u = await uuid();
    object_property_set(set, text, u);
    object_property_set(get, u, text);
  }
}
