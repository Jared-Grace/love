import { fn_name } from "./fn_name.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { g_something_else } from "./g_something_else.mjs";
export function g_anything_else() {
  ("a randomized continue-prompt the NPC asks once the player has addressed one thing — NOT a greeting (no name, no 'nice to talk again'). two families, so mid-conversation repeats aren't recognizable: an OPEN 'what's on your mind?' question, and the narrower 'anything else?' of ",
    fn_name("g_something_else"),
    ". only for when nothing has been declined — after a boundary the NPC asks ",
    fn_name("g_something_else"),
    " directly, because an open invitation there would contradict the limit they just set");
  let open = list_random_item([
    "What's on your mind?",
    "What's on your heart?",
    "What would you like to talk about now?",
  ]);
  let narrow = g_something_else();
  let result = list_random_item([open, narrow]);
  return result;
}
