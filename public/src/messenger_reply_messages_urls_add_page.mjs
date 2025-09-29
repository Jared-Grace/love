import { messenger_reply_messages_urls_add_multiple } from "../../../love/public/src/messenger_reply_messages_urls_add_multiple.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { puppeteer_hrefs_starts_with } from "../../../love/public/src/puppeteer_hrefs_starts_with.mjs";
export async function messenger_reply_messages_urls_add_page(page) {
  let prefix = "https://www.facebook.com/messages/";
  let urls = await puppeteer_hrefs_starts_with(page, prefix);
  list_remove_if_exists(urls, "https://www.facebook.com/messages/new/");
  await messenger_reply_messages_urls_add_multiple(urls);
  return urls;
}
