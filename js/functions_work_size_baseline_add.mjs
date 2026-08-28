import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { functions_work_size_baseline_path } from "./functions_work_size_baseline_path.mjs";
import { functions_work_oversize_names } from "./functions_work_oversize_names.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
export async function functions_work_size_baseline_add(names_comma) {
  arguments_assert(arguments, 1);
  ("$plain names_comma");
  ("the names of functions to record, joined by commas. They name functions to look up and nothing that runs.");
  ("Record NAMED functions as allowed to stand above the size ceiling, and leave every other oversize function still failing.");
  ("Its whole-file twin takes everything standing above the ceiling right now, which is the wrong shape whenever what stands there is a mixture - and here it always is. Several people work this repo at once, so at any moment the oversize list holds functions that are long in the shape of what they hold and functions somebody is halfway through cutting. One run of the whole-file writer blesses both, and afterwards nothing tells the one that was never going to clear from the one that was about to.");
  ("Measured on 2026-08-28: sixteen names stood above the ceiling, and the two that needed recording were two of the sixteen. Recording those two by name leaves the other fourteen red, which is what a person cutting one of them wants and what the whole-file writer would have taken away from them.");
  ("The refusals live in the shared adder and both matter here. A name not above the ceiling right now is not recorded, so a mistyped name cannot become a permanent line for a function the repo does not have. A name the record already holds is not recorded twice, because asking for it means the caller believes something about the file that is not true.");
  ("This is narrower than the whole-file writer rather than a new way out: what it adds is a subset of what that one would have added. The reason a name is allowed to stand belongs in that function's own prose, where the next reader of it will be, and not here.");
  let names = text_split_comma(names_comma);
  let path = functions_work_size_baseline_path();
  let offending = await functions_work_oversize_names();
  let r = await baseline_known_add(names, path, offending);
  return r;
}
