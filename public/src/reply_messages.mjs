import { marker } from "../../../love/public/src/marker.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { string_take } from "./string_take.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function reply_messages(messages, start) {
  marker("1");
  async function lambda(message) {
    let result = await reply_messages_inner(message, start);
    let value = object_property_get(result, "matches");
    if (equal(value, false)) {
      let size = string_size(message);
      let r = range_1(size);
      list_reverse(r);
      async function lambda2(t) {
        let taken = string_take(message, t);
        let result_loop = await reply_messages_inner(taken, start);
        value = object_property_get(result_loop, "matches");
        if (equal(value, true)) {
          log({
            result_loop,
          });
          return value;
        }
      }
      await each_async(r, lambda2);
    }
    return result;
  }
  let result = await list_map_unordered_async(messages, lambda);
  let filtered = list_filter_property(result, "matches", false);
  return filtered;
}
