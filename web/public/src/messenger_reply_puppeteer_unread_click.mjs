import { list_get } from "./list_get.mjs";
import { puppeteer_matches } from "./puppeteer_matches.mjs";
export async function messenger_reply_puppeteer_unread_click(page) {
  const tag_name = "span";
  const text = "Unread";
  const matches = await puppeteer_matches(page, tag_name, text);
  let m = list_get(matches, 2);
  await m.click();
}
