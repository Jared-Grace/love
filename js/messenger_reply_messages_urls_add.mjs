import { messenger_reply_messages_urls_add_multiple } from "./messenger_reply_messages_urls_add_multiple.mjs";
export async function messenger_reply_messages_urls_add(url) {
  let urls = [url];
  await messenger_reply_messages_urls_add_multiple(urls);
}
