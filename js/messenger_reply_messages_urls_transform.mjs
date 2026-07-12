import { messenger_reply_messages_urls_get } from "./messenger_reply_messages_urls_get.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function messenger_reply_messages_urls_transform(transform_inner) {
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let messages_urls = messenger_reply_messages_urls_get(data);
    transform_inner(messages_urls);
  }
}
