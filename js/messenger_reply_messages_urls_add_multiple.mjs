import { messenger_reply_messages_urls_transform } from "./messenger_reply_messages_urls_transform.mjs";
import { each } from "./each.mjs";
import { property_set } from "./property_set.mjs";
export async function messenger_reply_messages_urls_add_multiple(urls) {
  await messenger_reply_messages_urls_transform(transform_inner);
  function transform_inner(messages_urls) {
    function lambda(url) {
      property_set(messages_urls, url, 1);
    }
    each(urls, lambda);
  }
}
