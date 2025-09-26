import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function messenger_reply_messages_urls_add(url) {
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let messages_urls = object_property_initialize(data, "messages_urls", {});
    object_property_set(messages_urls, url, 1);
  }
}
