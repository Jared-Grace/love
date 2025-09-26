import { list_filter_ends_with_any } from "./list_filter_ends_with_any.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { object_properties } from "./object_properties.mjs";
import { messenger_reply_messages_urls_transform } from "./messenger_reply_messages_urls_transform.mjs";
import { messenger_reply_messages } from "./messenger_reply_messages.mjs";
import { messenger_reply_puppeteer } from "./messenger_reply_puppeteer.mjs";
import { command_line_read_empty } from "./command_line_read_empty.mjs";
import { marker } from "./marker.mjs";
import { log } from "./log.mjs";
import { bind_property } from "./bind_property.mjs";
import { keyboard_type_delay } from "./keyboard_type_delay.mjs";
export async function messenger_reply() {
  marker("1");
  async function lambda2(page) {
    let messages_urls = null;
    await messenger_reply_messages_urls_transform(transform_inner);
    function transform_inner(mu) {
      messages_urls = mu;
    }
    let properties = object_properties(messages_urls);
    let skips = ["7632130373481137"];
    function lambda4(s) {
      let v = "/" + s;
      return v;
    }
    let mapped = list_map(skips, lambda4);
    let filtered = list_filter_ends_with_any(mapped, properties);
    let first = list_first(filtered);
    let messages = await messenger_reply_messages(page, first);
    log(messages);
    let answer = await command_line_read_empty();
  }
  await messenger_reply_puppeteer(lambda2);
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
