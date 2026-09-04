import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_dependencies_bundled } from "./function_dependencies_bundled.mjs";
export async function functions_reachable_names(f_names) {
  arguments_assert(arguments, 1);
  ("Every function the named ones can reach, whether the file says so at its top or fetches it while running, gathered into one list with nothing said twice. Read-only.");
  ("IT IS THE QUESTION A MOVE ASKS, and asking it one name at a time is why a move gets planned wrong. Promoting a function to the shared namespace is only safe if everything it reaches goes with it, so the set that has to move is the union of the reachable sets and never any one of them. Read separately the lists overlap heavily and the eye stitches them together, which is a step done by hand at the exact moment the answer is being trusted.");
  ("IT TURNS ASIDE AT NOTHING. A said-at-the-top import is carried whether or not anything calls it, and a fetched-while-running one is reached the moment the branch holding it runs - so both belong in a move's answer, and leaving the second out is how a promotion passes here and then breaks on a page. So this is what a build would emit, not what one run would touch.");
  ("THE NAMES ARRIVE JOINED BY COMMAS, which is how every command here is handed a list, because a command line gives each word over separately and a list written as words would be read as further parameters.");
  let names = text_split_comma(f_names);
  let reached = await function_dependencies_bundled(names);
  return reached;
}
