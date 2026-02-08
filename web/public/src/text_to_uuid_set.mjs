import { text_to_uuid_path } from "../../../love/public/src/text_to_uuid_path.mjs";
import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { object_property_exists_not_assert } from "../../../love/public/src/object_property_exists_not_assert.mjs";
import { file_json_transform_initialize } from "../../../love/public/src/file_json_transform_initialize.mjs";
export async function text_to_uuid_set(text) {
  let joined = text_to_uuid_path();
  await file_json_transform_initialize(joined, {}, lambda);
  async function lambda(data) {
    let get = object_property_initialize(data, "get", {});
    let set = object_property_initialize(data, "set", {});
    object_property_exists_not_assert(set, text);
    let u = await uuid();
    object_property_set(set, text, u);
    object_property_set(get, u, text);
  }
}
