import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { reply_dictionary } from "../../../love/public/src/reply_dictionary.mjs";
export async function reply_messages(messages, start) {
  let dictionary = await reply_dictionary();
  function lambda(message) {
    let result = reply_messages_inner(message, dictionary, start);
    return result;
  }
  let result = list_map(messages, lambda);
  let filtered = list_filter_property(list, property_name, property_value);
  return result;
}
