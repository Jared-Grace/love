import { list_skip } from "../../../love/public/src/list_skip.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { messenger_reply_messages_me } from "../../../love/public/src/messenger_reply_messages_me.mjs";
import { messenger_reply_messages_name } from "../../../love/public/src/messenger_reply_messages_name.mjs";
export function messenger_reply_unreplied(messages) {
  let property_name = messenger_reply_messages_name();
  let property_value = messenger_reply_messages_me();
  let mine = list_filter_property(messages, property_name, property_value);
  let mine_last = list_last(mine);
  let index_last = list_index_of(messages, mine_last);
  let unreplied = list_skip(messages, index_last + 1);
  let result = {
    mine_last,
    unreplied,
  };
  return result;
}
