import { messenger_reply_messages_urls_add_multiple } from "./messenger_reply_messages_urls_add_multiple.mjs";
import { list_remove_if_exists } from "./list_remove_if_exists.mjs";
import { puppeteer_hrefs_starts_with } from "./puppeteer_hrefs_starts_with.mjs";
export async function messenger_reply_messages_urls_add_page(page) {
  let prefix = "https://www.facebook.com/messages/";
  let filtered = await puppeteer_hrefs_starts_with(page, prefix);
  list_remove_if_exists(filtered, "https://www.facebook.com/messages/new/");
  await messenger_reply_messages_urls_add_multiple(filtered);
}
