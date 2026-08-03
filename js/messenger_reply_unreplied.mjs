import { list_index_of_add } from "./list_index_of_add.mjs";
import { sleep_forever } from "./sleep_forever.mjs";
import { list_skip } from "./list_skip.mjs";
import { list_last } from "./list_last.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { messenger_reply_messages_me } from "./messenger_reply_messages_me.mjs";
import { messenger_reply_messages_name } from "./messenger_reply_messages_name.mjs";
export async function messenger_reply_unreplied(messages) {
  let property_name = messenger_reply_messages_name();
  let property_value = messenger_reply_messages_me();
  let mine = list_filter_property(messages, property_name, property_value);
  await sleep_forever();
  let mine_last = list_last(mine);
  let skip_count = list_index_of_add(messages, mine_last, 1);
  let unreplied = list_skip(messages, skip_count);
  let result = {
    mine_last,
    unreplied,
  };
  return result;
}
