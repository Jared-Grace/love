import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function g_something_else() {
  "the NPC's continue-prompt for when the invitation must EXCLUDE something — right after they have declined a topic, an open 'we can talk about whatever you want' would take back, in the same breath, the limit they just set. so every variant here asks only for something ELSE: three plain forms, and a structured 'is there anything else…?' grammared from interchangeable parts so repeats aren't recognizable";
  let plain = list_random_item([
    "What else is on your mind?",
    "What else would you like to talk about?",
    "Is there more you'd like to talk about?",
  ]);
  let t = list_random_item(["so, ", "well, ", "now, "]);
  let lead = text_random_or_empty(t);
  let ask = list_random_item([
    "is there anything else",
    "was there anything more",
    "is there something else",
  ]);
  let topic = list_random_item([
    "you wanted to talk about",
    "on your heart",
    "on your mind",
    "you'd like to share",
    "you wanted to ask me",
  ]);
  let close = list_random_item(["?", ", friend?"]);
  let s = text_combine_multiple([lead, ask, " ", topic, close]);
  let structured = text_first_upper_to(s);
  let result = list_random_item([plain, structured]);
  return result;
}
