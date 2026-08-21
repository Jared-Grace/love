import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { function_reachable_names } from "./function_reachable_names.mjs";
import { list_concat_unique } from "./list_concat_unique.mjs";
export async function functions_reachable_names(f_names) {
  arguments_assert(arguments, 1);
  ("Every function the named ones can reach through their imports, however far down, gathered into one list with nothing said twice. Read-only.");
  ("IT IS THE QUESTION A MOVE ASKS, and asking it one name at a time is why a move gets planned wrong. Promoting a function to the shared namespace is only safe if everything it reaches goes with it, so the set that has to move is the union of the reachable sets and never any one of them. Read separately the lists overlap heavily and the eye stitches them together, which is a step done by hand at the exact moment the answer is being trusted.");
  ("IT TURNS ASIDE AT NOTHING, the same as the single-name answer it is built on, because a static import is carried whether or not anything calls it. So this is what a bundle would hold, not what a run would touch.");
  ("THE NAMES ARRIVE JOINED BY COMMAS, which is how every command here is handed a list, because a command line gives each word over separately and a list written as words would be read as further parameters.");
  let names = text_split_comma(f_names);
  let reached = [];
  for (let f_name of names) {
    let from_one = await function_reachable_names(f_name);
    reached = list_concat_unique(reached, from_one);
  }
  return reached;
}
