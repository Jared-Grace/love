import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
import { text_first_upper_to } from "./text_first_upper_to.mjs";
export function g_anything_else() {
  "a randomized, STRUCTURED 'is there anything else?' prompt the NPC asks when the player returns to the opener menu after addressing one thing (NOT a greeting again). composed from interchangeable parts (optional lead / ask / topic / close) then first-letter-capitalized — so the possibility space is large and repeats aren't recognizable, unlike a flat list";
  let lead = text_random_or_empty(list_random_item(["so, ", "well, ", "now, "]));
  let ask = list_random_item([
    "is there anything else",
    "was there anything more",
    "is there something else",
    "is there anything more",
  ]);
  let topic = list_random_item([
    "you wanted to talk about",
    "on your heart",
    "on your mind",
    "you'd like to share",
    "you were wondering about",
    "you wanted to ask me",
  ]);
  let close = list_random_item(["?", ", friend?"]);
  let sentence = text_combine_multiple([lead, ask, " ", topic, close]);
  let result = text_first_upper_to(sentence);
  return result;
}
