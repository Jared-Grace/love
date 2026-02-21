import { reply_messages_all } from "../../../love/public/src/reply_messages_all.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
export async function reply_messages_matches_not(messages, start) {
  let result = await reply_messages_all(start, messages);
  let filtered = list_filter_property(result, "matches", false);
  return filtered;
}
