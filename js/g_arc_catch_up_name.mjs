import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { assert_json } from "./assert_json.mjs";
export function g_arc_catch_up_name() {
  "What the arc prompt calls the thing a person says at the start of a return visit - the one field on the conversation level, read by name from the fields themselves.";
  "The prompt SPEAKS this name as well as defining it: it says when the beat happens and it says the beat cannot answer the opener the player has not chosen yet. Those are ordinary sentences with the word sitting in them, so a rename that fixed the definition would leave them naming a field that no longer exists - and nothing would go red, because a prompt is prose.";
  "It ASSERTS that the conversation level holds exactly one field rather than trusting the first. Taking [0] quietly would keep working while meaning something else the day a second conversation-level field arrives, which is the failure this whole single-sourcing was for.";
  let fields = g_arc_answer_fields();
  let conversation = property_get(fields, "conversation");
  let b = equal(conversation.length, 1);
  assert_json(b, {
    conversation,
    hint: "the conversation level holds exactly one field, and this reads its name - a second one means the prompt's sentences about it have to say which",
  });
  let field = conversation[0];
  let r = property_get(field, "name");
  return r;
}
