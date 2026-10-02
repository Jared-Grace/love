import { arguments_assert } from "./arguments_assert.mjs";
import { function_names_reaching_any_walked } from "./function_names_reaching_any_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function function_names_reaching_any(f_names, f_names_target) {
  "$plain f_names";
  "$plain f_names_target";
  "Which of these functions can reach any of those, by importing, however many files away - one record per offending pair, saying who reached what.";
  "IT IS THE NEIGHBOUR THAT ASKS ABOUT SEVERAL FORBIDDEN THINGS AT ONCE, and it exists because asking the one-target question once per target walks the same family once per target. A rule that forbids three things is one rule, and the family it binds is read the same way whichever of the three it is being read for, so the walk belongs outside the loop over targets rather than inside it. Measured over the apps, one target meant every app's imports opened again from the top.";
  "A PAIR IS HANDED BACK RATHER THAN A NAME, because the thing to be put right is the pair. Told only that an app offends, a reader has to go and find which of the forbidden names it reached before they can start; told the pair, the work is named.";
  "Imports and not calls, for the reason the one-target neighbour gives: an import is what has to be loaded for the code to run at all, so it says what a bundle carries whether or not the branch reaching it is a branch that ever runs.";
  "The walk itself moved one name along, to the twin that also says how many functions it opened. A caller who only wants the pairs keeps asking here and reads the same answer; a gate that has to prove it looked at anything asks the twin instead, because a list of no pairs is what a working sweep and a broken one both hand back.";
  arguments_assert(arguments, 2);
  let walked = await function_names_reaching_any_walked(
    f_names,
    f_names_target,
  );
  let offenders = property_get(walked, "offenders");
  return offenders;
}
