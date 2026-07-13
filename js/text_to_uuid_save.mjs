import { text_to_uuid_save_initialize } from "./text_to_uuid_save_initialize.mjs";
import { text_to_uuid_initial } from "./text_to_uuid_initial.mjs";
import { text_to_uuid_ids_initialize } from "./text_to_uuid_ids_initialize.mjs";
import { text_to_uuid_path } from "./text_to_uuid_path.mjs";
import { property_set } from "./property_set.mjs";
import { uuid } from "./uuid.mjs";
import { property_exists_not_assert_json } from "./property_exists_not_assert_json.mjs";
import { file_json_transform_initialize } from "./file_json_transform_initialize.mjs";
export async function text_to_uuid_save(text) {
  let joined = text_to_uuid_path();
  let initial = text_to_uuid_initial();
  await file_json_transform_initialize(joined, initial, lambda);
  async function lambda(data) {
    let set = text_to_uuid_save_initialize(data);
    property_exists_not_assert_json(set, text, {
      hint: "this text should not already have a uuid saved — is it being saved a second time?",
    });
    let get = text_to_uuid_ids_initialize(data);
    let u = await uuid();
    property_set(set, text, u);
    property_set(get, u, text);
  }
}
