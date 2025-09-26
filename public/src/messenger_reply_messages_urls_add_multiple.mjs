import { messenger_reply_messages_urls_get } from "./messenger_reply_messages_urls_get.mjs";
import { each } from "./each.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { file_json_transform } from "./file_json_transform.mjs";
import { folder_user_docs_path } from "./folder_user_docs_path.mjs";
export async function messenger_reply_messages_urls_add_multiple(urls) {
  let fb_path = folder_user_docs_path("fb.json");
  await file_json_transform(fb_path, transform);
  function transform(data) {
    let messages_urls = messenger_reply_messages_urls_get(data);
    function lambda(url) {
      object_property_set(messages_urls, url, 1);
    }
    each(urls, lambda);
  }
}
