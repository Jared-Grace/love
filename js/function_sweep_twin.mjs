import { fn_name } from "./fn_name.mjs";
import { function_name_to_parts } from "./function_name_to_parts.mjs";
import { list_size } from "./list_size.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_insert } from "./list_insert.mjs";
import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function function_sweep_twin(f_name) {
  "Whether a command that does this to a whole set already exists, and what it is called.";
  "Asked because the log's loop reading kept naming a step run over and over as a missing command, when five times out of five the sweep was already in the repo and simply not reached for. A measurement that invites the wrong conclusion is worse than none, so the reading answers this beside every entry rather than leaving the next reader to repeat it.";
  "Guessed from the two shapes the repo actually uses - a word saying there are several, and the singular word at the front turned plural - and nothing else. A guess that finds nothing is reported as nothing, which is the honest answer here: it says look, not that there is none.";
  ("The several-word is tried at every join in the name, not only on the end, because the repo puts it in the middle whenever something follows it: ",
    fn_name("function_auto_checked"),
    " is swept by ",
    fn_name("function_auto_multiple_checked"),
    ", and asking only about the end answered that there was no sweep at all. That is the worst answer this can give - a false absence reads as permission to build the thing that already exists, and on 2026-07-30 it was believed and a duplicate command was written, gated, granted and then deleted. Only names that really live are reported, so widening the guess cannot invent a twin; it can only stop missing one.");
  let names = await functions_names();
  let candidates = [];
  let severals = ["multiple", "all", "each", "any"];
  let parts = function_name_to_parts(f_name);
  let size = list_size(parts);
  for (let several of severals) {
    ("from one, because a name beginning with the several-word is a different thing rather than a sweep of this one");
    for (let index = 1; less_than_equal(index, size); index++) {
      let widened = list_copy(parts);
      list_insert(widened, index, several);
      let candidate = function_name_combine_multiple(widened);
      candidates.push(candidate);
    }
  }
  let singular = text_starts_with(f_name, "function_");
  if (singular) {
    let rest = f_name.slice("function_".length);
    let plural = text_combine("functions_", rest);
    candidates.push(plural);
  }
  let found = [];
  for (let candidate of candidates) {
    let lives = list_includes(names, candidate);
    if (lives) {
      found.push(candidate);
    }
  }
  return found;
}
