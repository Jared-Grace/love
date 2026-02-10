import { messenger_reply_messages_urls_transform } from "../../../love/public/src/messenger_reply_messages_urls_transform.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
export async function messenger_reply_messages_urls_add_multiple(urls) {
  await messenger_reply_messages_urls_transform(transform_inner);
  function transform_inner(messages_urls) {
    function lambda(url) {
      property_set(messages_urls, url, 1);
    }
    each(urls, lambda);
  }
}
