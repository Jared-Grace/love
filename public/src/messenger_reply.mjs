import { http_sleep } from "./http_sleep.mjs";
import { each_async } from "./each_async.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { messenger_reply_wait } from "./messenger_reply_wait.mjs";
import { messenger_reply_messages_urls_add_page } from "./messenger_reply_messages_urls_add_page.mjs";
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
  await messenger_reply_unread_click(page);
  await messenger_reply_wait(page);
  let urls = await messenger_reply_messages_urls_add_page(page);
  log(urls);
  async function lambda(url) {
    await http_sleep();
    await page.goto(url);
    await messenger_reply_wait(page);
  }
  await each_async(urls, lambda);
  let answer = await command_line_read_empty();
  return;
  log(messages);
  return;
  return;
  await p.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay("Greetings!", fn);
  return;
  await page.keyboard.press("Enter");
}
