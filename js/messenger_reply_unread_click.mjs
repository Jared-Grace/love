import { list_get } from "./list_get.mjs";
import { puppeteer_matches } from "./puppeteer_matches.mjs";
export async function messenger_reply_unread_click(page) {
  let tag_name = "span";
  let text = "Unread";
  let matches = await puppeteer_matches(page, tag_name, text);
  let m = list_get(matches, 2);
  await m.click();
}
