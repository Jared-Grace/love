import { http_sleep } from "./http_sleep.mjs";
import { each } from "./each.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_remove } from "./list_remove.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_first } from "./list_first.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { messenger_reply_messages_urls_add_page } from "./messenger_reply_messages_urls_add_page.mjs";
import { messenger_reply_wait } from "./messenger_reply_wait.mjs";
import { messenger_reply_unread_click } from "./messenger_reply_unread_click.mjs";
import { messenger_reply_messages } from "./messenger_reply_messages.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
export async function messenger_reply_unread_collect() {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
    protocolTimeout: 120000,
  });
  const page = await browser.newPage();
  let v = messenger_reply_url();
  let messages = await messenger_reply_messages(page, v);
  await messenger_reply_unread_click(page);
  await messenger_reply_wait(page);
  let urls = await messenger_reply_messages_urls_add_page(page);
  while (true) {
    let e = list_empty_is(urls);
    if (e) {
      break;
    }
    let url = list_first(urls);
    let prefix = "https://www.facebook.com";
    let without = string_prefix_without(url, prefix);
    const selector = `a[href="${without}"]`;
    const link = await page.$(selector);
    if (link !== null) {
      await link.click();
      await page.waitForSelector(selector, {
        state: "detached",
      });
    }
    list_remove(urls, url);
    let urls_new = await messenger_reply_messages_urls_add_page(page);
    function lambda2(url_new) {
      list_add_if_not_includes(urls, url_new);
    }
    each(urls_new, lambda2);
    await http_sleep();
  }
  let v2 = {
    messages,
    page,
  };
  return v2;
}
