import { list_empty_not_is } from "./list_empty_not_is.mjs";
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
    const children2 = await c.$$('[role="none"]');
    for (const c2 of children2) {
      function lambda2(node) {
        let v3 = node.parentElement?.tagName;
        return v3;
      }
      const parentTag = await c2.evaluate(lambda2);
      if (parentTag === "H5") {
        continue;
      }
      function lambda4(imgs) {
        function lambda3(img) {
          let v4 = getComputedStyle(img).borderRadius === "50%";
          return v4;
        }
        function lambda5(img) {
          let v6 = img.src;
          return v6;
        }
        let v5 = imgs.filter(lambda3).map(lambda5);
        return v5;
      }
      const imgs = await c.$$eval("img", lambda4);
      function lambda(node) {
        let v2 = node.textContent;
        return v2;
      }
      console.log(await c2.evaluate(lambda));
      let ne = list_empty_not_is(list);
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
