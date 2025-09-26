import { object_property_set } from "./object_property_set.mjs";
import { messenger_reply_messages_transform } from "./messenger_reply_messages_transform.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { messenger_reply_messages_message } from "./messenger_reply_messages_message.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { messenger_reply_unreplied } from "./messenger_reply_unreplied.mjs";
import { messenger_reply_wait } from "./messenger_reply_wait.mjs";
import { list_filter_ends_with_not_any } from "./list_filter_ends_with_not_any.mjs";
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
    let filtered = list_filter_ends_with_not_any(mapped, properties);
    let first = list_first(filtered);
    let messages = await messenger_reply_messages(page, first);
    let unreplied = messenger_reply_unreplied(messages);
    let property_name = messenger_reply_messages_message();
    let mapped2 = list_map_property(unreplied, property_name);
    let joined = list_join_space(mapped2);
    async function lambda(messages2) {
      object_property_set(messages2, joined, 1);
    }
    await messenger_reply_messages_transform(lambda);
    let answer = await command_line_read_empty();
  }
  await messenger_reply_puppeteer(lambda2);
  return;
  log(messages);
  return;
  return;
  await messenger_reply_wait(page);
  await p.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay("Greetings!", fn);
  return;
  await page.keyboard.press("Enter");
}
