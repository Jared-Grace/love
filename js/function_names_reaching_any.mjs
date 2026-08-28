import { arguments_assert } from "./arguments_assert.mjs";
import { list_is_assert_json } from "./list_is_assert_json.mjs";
import { function_imports_reached } from "./function_imports_reached.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export async function function_names_reaching_any(f_names, f_names_target) {
  "$plain f_names";
  "$plain f_names_target";
  "Which of these functions can reach any of those, by importing, however many files away - one record per offending pair, saying who reached what.";
  arguments_assert(arguments, 2);
  list_is_assert_json(f_names, {
    hint: "function names reaching any expects a list of names to ask about; a single name given as text would be walked one letter at a time and each letter looked up as a function",
  });
  list_is_assert_json(f_names_target, {
    hint: "function names reaching any expects a list of names to look for; a single name given as text would be walked one letter at a time",
  });
  ("IT IS THE NEIGHBOUR THAT ASKS ABOUT SEVERAL FORBIDDEN THINGS AT ONCE, and it exists because asking the one-target question once per target walks the same family once per target. A rule that forbids three things is one rule, and the family it binds is read the same way whichever of the three it is being read for, so the walk belongs outside the loop over targets rather than inside it. Measured over the apps, one target meant every app's imports opened again from the top.");
  ("A PAIR IS HANDED BACK RATHER THAN A NAME, because the thing to be put right is the pair. Told only that an app offends, a reader has to go and find which of the forbidden names it reached before they can start; told the pair, the work is named.");
  ("Imports and not calls, for the reason the one-target neighbour gives: an import is what has to be loaded for the code to run at all, so it says what a bundle carries whether or not the branch reaching it is a branch that ever runs.");
  let offenders = [];
  for (let f_name of f_names) {
    let reached = await function_imports_reached(f_name);
    for (let target of f_names_target) {
      let reaches = list_includes(reached, target);
      if (reaches) {
        list_add(offenders, {
          f_name,
          target,
        });
      }
    }
  }
  return offenders;
}
