import { string_size } from "../../../love/public/src/string_size.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function reply_messages(messages, start) {
  function lambda(message) {
    let result = reply_messages_inner(message, start);
    let size = string_size(s);
    let r = range(count);
    return result;
  }
  let result = list_map(messages, lambda);
  let filtered = list_filter_property(result, "matches", false);
  return filtered;
}
