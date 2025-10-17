import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { string_take } from "../../../love/public/src/string_take.mjs";
import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { string_size } from "../../../love/public/src/string_size.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_unique } from "./list_unique.mjs";
export async function reply_messages_all(start, messages) {
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
          return value;
        }
      }
      await each_async(r, lambda2);
    }
    return result;
  }
  messages = list_unique(messages);
  let result = await list_map_unordered_async(messages, lambda);
  return result;
}
