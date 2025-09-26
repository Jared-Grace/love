import { object_property_initialize } from "./object_property_initialize.mjs";
import { marker } from "./marker.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function messenger_reply_messages_transform(lambda$messages) {
  marker("1");
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let value = object_property_initialize(data, "messages", {});
    lambda$messages(value);
  }
}
