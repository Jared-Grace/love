import { arguments_assert } from "./arguments_assert.mjs";
import { functions_parameters_baseline_path } from "./functions_parameters_baseline_path.mjs";
import { functions_parameters_oversize_names } from "./functions_parameters_oversize_names.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function functions_parameters_baseline_reseed() {
  arguments_assert(arguments, 0);
  ("Write the row record from what the repo holds right now, whatever the count, including functions whose rows were not over the ceiling before.");
  ("The deliberate escape from the ratchet, and the twin that refuses growth is still the one to reach for. This one exists for the day a ceiling is first set, when every name above it is equally old and none of them is somebody's half-finished work - and for the day it is lowered, which is the same situation again.");
  ("Nothing hides here. The record is a data file, so a re-seed stands in the commit as a changed file with every added name spelled out in it, which is a thing somebody reading the log can see and disagree with. That is the whole guard: not a rule about when it may be run, but a record of every time it was.");
  let path = functions_parameters_baseline_path();
  let named = await functions_parameters_oversize_names();
  let r = await baseline_known_write(named, path);
  return r;
}
