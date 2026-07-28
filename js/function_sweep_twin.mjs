import { functions_names } from "./functions_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export async function function_sweep_twin(f_name) {
  "Whether a command that does this to a whole set already exists, and what it is called.";
  "Asked because the log's loop reading kept naming a step run over and over as a missing command, when five times out of five the sweep was already in the repo and simply not reached for. A measurement that invites the wrong conclusion is worse than none, so the reading answers this beside every entry rather than leaving the next reader to repeat it.";
  "Guessed from the two shapes the repo actually uses - a suffix saying there are several, and the singular word at the front turned plural - and nothing else. A guess that finds nothing is reported as nothing, which is the honest answer here: it says look, not that there is none.";
  let names = await functions_names();
  let candidates = [];
  let suffixes = ["_multiple", "_all", "_each"];
  for (let suffix of suffixes) {
    let candidate = text_combine(f_name, suffix);
    candidates.push(candidate);
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
