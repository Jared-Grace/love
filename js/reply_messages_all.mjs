import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { each_async } from "./each_async.mjs";
import { text_take } from "./text_take.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { range_1 } from "./range_1.mjs";
import { text_size } from "./text_size.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { reply_messages_inner } from "./reply_messages_inner.mjs";
import { list_unique } from "./list_unique.mjs";
export async function reply_messages_all(start, messages) {
  async function lambda(message) {
    let result = await reply_messages_inner(message, start);
    let value = property_get(result, "matches");
    if (equal(value, false)) {
      let size = text_size(message);
      let r = range_1(size);
      list_reverse(r);
      async function lambda2(t) {
        let taken = text_take(message, t);
        let result_loop = await reply_messages_inner(taken, start);
        value = property_get(result_loop, "matches");
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
