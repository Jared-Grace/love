import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { range } from "../../../love/public/src/range.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function reply_messages(messages, start) {
  function lambda(message) {
    let result = reply_messages_inner(message, start);
    let value = object_property_get(object, "matches");
    if (equal(left, right)) {
    }
    let size = string_size(message);
    let r = range(size);
    list_reverse(r);
    function lambda2(item) {}
    each(list, lambda2);
    return result;
  }
  let result = list_map(messages, lambda);
  let filtered = list_filter_property(result, "matches", false);
  return filtered;
}
