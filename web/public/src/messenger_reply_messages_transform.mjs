import { property_initialize } from "../../../love/public/src/property_initialize.mjs";
import { file_json_transform } from "../../../love/public/src/file_json_transform.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function messenger_reply_messages_transform(lambda$messages) {
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let value = property_initialize(data, "messages", {});
    lambda$messages(value);
  }
}
