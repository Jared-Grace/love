import { sleep } from "../../../love/public/src/sleep.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { messenger_reply_messages_transform } from "../../../love/public/src/messenger_reply_messages_transform.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { messenger_reply_messages_message } from "../../../love/public/src/messenger_reply_messages_message.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { messenger_reply_unreplied } from "../../../love/public/src/messenger_reply_unreplied.mjs";
import { messenger_reply_wait } from "../../../love/public/src/messenger_reply_wait.mjs";
import { list_filter_ends_with_not_any } from "../../../love/public/src/list_filter_ends_with_not_any.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { messenger_reply_messages_urls_transform } from "../../../love/public/src/messenger_reply_messages_urls_transform.mjs";
import { messenger_reply_messages } from "../../../love/public/src/messenger_reply_messages.mjs";
import { messenger_reply_puppeteer } from "../../../love/public/src/messenger_reply_puppeteer.mjs";
import { command_line_read_empty } from "../../../love/public/src/command_line_read_empty.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { bind_property } from "../../../love/public/src/bind_property.mjs";
import { keyboard_type_delay } from "../../../love/public/src/keyboard_type_delay.mjs";
export async function messenger_reply() {
  marker("1");
  async function lambda2(page) {
    await sleep(ms);
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
    let { mine_last, unreplied } = messenger_reply_unreplied(messages);
    let message = object_property_get(mine_last, "message");
    let mine_last_lines = string_split_newline(message);
    let mine_last_lines_last = list_last(mine_last_lines);
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
  await messenger_reply_wait(page);
  await p.focus();
  let fn = bind_property(page.keyboard, "type");
  await keyboard_type_delay("Greetings!", fn);
  return;
  await page.keyboard.press("Enter");
}
