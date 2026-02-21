import { messenger_reply_puppeteer } from "../../../love/public/src/messenger_reply_puppeteer.mjs";
import { http_sleep } from "../../../love/public/src/http_sleep.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add_if_not_includes } from "../../../love/public/src/list_add_if_not_includes.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { text_prefix_without } from "../../../love/public/src/text_prefix_without.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { messenger_reply_messages_urls_add_page } from "../../../love/public/src/messenger_reply_messages_urls_add_page.mjs";
import { messenger_reply_wait } from "../../../love/public/src/messenger_reply_wait.mjs";
import { messenger_reply_unread_click } from "../../../love/public/src/messenger_reply_unread_click.mjs";
import { messenger_reply_messages } from "../../../love/public/src/messenger_reply_messages.mjs";
import { messenger_reply_url } from "../../../love/public/src/messenger_reply_url.mjs";
export async function messenger_reply_unread_collect() {
  const page = await messenger_reply_puppeteer(lambda);
  async function lambda(page) {
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
      let without = text_prefix_without(url, prefix);
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
  }
}
