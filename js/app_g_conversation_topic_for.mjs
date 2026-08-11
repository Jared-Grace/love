import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_g_conversation_topic_for(turn) {
  arguments_assert(arguments, 1);
  let kind = property_get(turn, "kind");
  let topics = {
    gospel_share_objection: "faith",
    how_r_u: "how I'm doing",
    believe: "what I believe",
  };
  let topic = property_get(topics, kind);
  return topic;
}
