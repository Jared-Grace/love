import { marker } from "../../../love/public/src/marker.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
import { puppeteer_matches } from "../../../love/public/src/puppeteer_matches.mjs";
export async function messenger_reply_unread_click(page) {
  marker("1");
  const tag_name = "span";
  const text = "Unread";
  const matches = await puppeteer_matches(page, tag_name, text);
  let m = list_get(matches, 2);
  await m.click();
}
