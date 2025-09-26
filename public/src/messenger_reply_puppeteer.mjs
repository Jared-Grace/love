import { list_empty_is } from "./list_empty_is.mjs";
import { log } from "./log.mjs";
import { messenger_reply_puppeteer_unread_click } from "./messenger_reply_puppeteer_unread_click.mjs";
import { bind_property } from "./bind_property.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
export async function messenger_reply_puppeteer() {
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  let v = messenger_reply_url();
  await page.goto(v);
  const s = 'p[dir="auto"]';
  let p = await page.waitForSelector(s, {
    timeout: 10000,
  });
  let conversation = await page.$(
    '[aria-label^="Messages in conversation with"]',
  );
  const children = await conversation.$$('[data-virtualized="false"]');
  for (const c of children) {
    const children3 = await conversation.$$(
      '[style="--x-paddingBottom: 0px; --x-paddingInlineEnd: 0px;"]',
    );
    const children2 = await c.$$('[role="none"]');
    for (const c of children2) {
      const elements = await c.$$(`h5 > [data-virtualized="false"]`);
      let e = list_empty_is(elements);
      if (e) {
        function lambda(node) {
          let v2 = node.textContent;
          return v2;
        }
        let e = list_empty_is(elements);
        log(e);
        console.log(await c.evaluate(lambda));
        ("");
      }
    }
  }
  return;
  await messenger_reply_puppeteer_unread_click(page);
  return;
  await p.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay("Greetings!", fn);
  return;
  await page.keyboard.press("Enter");
}
