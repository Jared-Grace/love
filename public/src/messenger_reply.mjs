import { messenger_reply_messages } from "./messenger_reply_messages.mjs";
import { messenger_reply_unread_click } from "./messenger_reply_unread_click.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { bind_property } from "./bind_property.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { messenger_reply_user_data_path } from "./messenger_reply_user_data_path.mjs";
export async function messenger_reply() {
  marker("1");
  const puppeteer = await import("puppeteer");
  const browser = await puppeteer.launch({
    headless: false,
    userDataDir: messenger_reply_user_data_path(),
  });
  const page = await browser.newPage();
  let v = messenger_reply_url();
  let messages = await messenger_reply_messages(page, v);
  function lambda3(links) {
    function lambda(link) {
      let v2 = link.href;
      return v2;
    }
    function lambda2(href) {
      return href;
    }
    let v3 = links.map(lambda).filter(lambda2);
    return v3;
  }
  const hrefs = await page.$$eval("a", lambda3);
  let prefix = "https://www.facebook.com/messages/";
  console.log(hrefs);
  return;
  log(messages);
  return;
  await messenger_reply_unread_click(page);
  return;
  await p.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay("Greetings!", fn);
  return;
  await page.keyboard.press("Enter");
}
