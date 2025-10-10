import { object_property_initialize } from "../../../love/public/src/object_property_initialize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function messenger_reply_messages_transform(lambda$messages) {
  marker("1");
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let value = object_property_initialize(data, "messages", {});
    lambda$messages(value);
  }
}
