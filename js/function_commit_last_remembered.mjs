import { arguments_assert } from "./arguments_assert.mjs";
import { function_commit_last } from "./function_commit_last.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function function_commit_last_remembered(f_name) {
  arguments_assert(arguments, 1);
  ("The last commit to touch a function's file, asked once and then kept for as long as this process lives.");
  ("Asking costs a whole program that reads the history, and the run that wants this asks gate by gate, so a function named by five red gates was asked five times over for the one answer. Measured on a run of the whole repo: two hundred and eighty-four lines printed from a hundred and thirteen distinct names, which is three in every five asks spent learning what was already known.");
  ("Nothing is kept apart, so a name with no commit to give is remembered as having none and is not asked again either - that answer costs exactly as much to find as any other, and it is the one a run full of names from other folders finds most often.");
  ("It is safe to keep only because a run is short and the question is about what has already been committed. A peer committing halfway through would change the answer, and being told the same thing about a name in two places is better than being told two different things.");
  let held = global_function_property_exists(
    function_commit_last_remembered,
    f_name,
  );
  if (held) {
    let kept = global_function_property_get(
      function_commit_last_remembered,
      f_name,
    );
    return kept;
  }
  let last = await function_commit_last(f_name);
  global_function_property_set(function_commit_last_remembered, f_name, last);
  return last;
}
