import { object_properties } from "./object_properties.mjs";
import { messenger_reply_messages_urls_transform } from "./messenger_reply_messages_urls_transform.mjs";
import { messenger_reply_messages } from "./messenger_reply_messages.mjs";
import { messenger_reply_url } from "./messenger_reply_url.mjs";
import { messenger_reply_puppeteer } from "./messenger_reply_puppeteer.mjs";
import { messenger_reply_unread_collect } from "./messenger_reply_unread_collect.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { bind_property } from "./bind_property.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
export async function messenger_reply() {
  marker("1");
  await messenger_reply_unread_collect();
  async function lambda2(page) {
    let messages_urls = null;
    await messenger_reply_messages_urls_transform(transform_inner);
    function transform_inner(mu) {
      messages_urls = mu;
    }
    let properties = object_properties(messages_urls);
    let v = messenger_reply_url();
    let messages = await messenger_reply_messages(page, v);
  }
  let page2 = await messenger_reply_puppeteer(lambda2);
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
