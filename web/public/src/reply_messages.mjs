import { list_filter } from "../../../love/public/src/list_filter.mjs";
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
  function lambda2(item) {}
  let filtered = list_filter(list, lambda2);
  return result;
}
