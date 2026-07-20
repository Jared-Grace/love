import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function g_anything_else() {
  "a randomized, STRUCTURED continue-prompt the NPC asks once the player has addressed one thing — NOT a greeting (no name, no 'nice to talk again'). two families: a 'What's on your mind now?' question and a structured 'Is there anything else…?' question, so mid-conversation repeats aren't recognizable";
  let whats = list_random_item([
    "What's on your mind?",
    "What's on your heart?",
    "What would you like to talk about now?",
    "What else is on your mind?",
    "What else would you like to talk about?",
    "Is there more you'd like to talk about?",
  ]);
  let lead = text_random_or_empty(list_random_item(["so, ", "well, ", "now, "]));
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
  let anything = text_first_upper_to(
    text_combine_multiple([lead, ask, " ", topic, close]),
  );
  let result = list_random_item([whats, anything]);
  return result;
}
