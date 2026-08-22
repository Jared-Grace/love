import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function g_arc_review_line_apply_conversation_start(arc, state) {
  "A fresh conversation put on the arc and made the one the rest of the page is read into, for the line of a review page that says a conversation begins here.";
  "IT IS EMPTY AND NOT HALF-FILLED. The line that starts a conversation carries nothing but the fact that one starts, and everything else about it - what was caught up on, every turn - arrives on later lines of its own. So the two words this makes are the two shapes those lines need to find waiting for them.";
  "THE OPENER IS CLEARED AT THE SAME MOMENT, because an opener belongs to the conversation it was written in: carried over, the first turn of a new conversation would open with a sentence from the end of the last one, and nothing on the page would say where it came from.";
  arguments_assert(arguments, 2);
  let conversation = {
    catch_up: "",
    turns: [],
  };
  let conversations = property_get(arc, "conversations");
  list_add(conversations, conversation);
  property_set(state, "conversation", conversation);
  property_set(state, "opener", "");
}
