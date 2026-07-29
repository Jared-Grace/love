import { positive_is } from "./positive_is.mjs";
import { list_size } from "./list_size.mjs";
import { g_prayers_conversation } from "./g_prayers_conversation.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
export function petitions_choose(prayer_texts) {
  let contextual = positive_is(list_size(prayer_texts));
  if (contextual) {
    return prayer_texts;
  }
  let generic = g_prayers_conversation();
  list_shuffle(generic);
  let some = list_take(generic, 4);
  return some;
}
