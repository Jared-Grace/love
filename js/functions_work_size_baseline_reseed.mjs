import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_work_size_baseline_reseed() {
  arguments_assert(arguments, 0);
  ("Write the size record from what the repo holds right now, whatever the count, including functions that were not over the ceiling before.");
  ("The deliberate escape from the ratchet, and the twin that refuses growth is still the one to reach for. This one exists because some functions are long in the shape of what they hold rather than in how they were written - a lesson whose body is the content it teaches has nothing inside it to name, and cutting it in half would name half a lesson.");
  ("Nothing hides here. The record is a data file, so a re-seed stands in the commit as a changed file with every added name spelled out in it, which is a thing somebody reading the log can see and disagree with. That is the whole guard: not a rule about when it may be run, but a record of every time it was.");
  let path = functions_work_size_baseline_path();
  let named = await functions_work_oversize_names();
  let r = await baseline_known_write(named, path);
  return r;
}
